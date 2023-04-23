let bird;
let game;
let startBtn;
let birdPosY;
let birdVelocity;
let gameStarted = false;
let pipeInterval;
let score = 0;

let playBtn;
let pipeGap = 300;
let firstJump = false;
let lastTime = 0;
const dt = 1000 / 60; // 60 frames per second
let accumulator = 0;
let maxScore = 0;
let gameActive = false;
let gameover = false;

function setup() {
  bird = document.getElementById("bird");
  game = document.getElementById("game");
  startBtn = document.getElementById("startBtn");
  gameover = document.getElementById("gameover");
  playBtn = document.getElementById("startBtn");
  gameover.classList.add("hidden");

  // Retrieve max score from local storage
  maxScore = localStorage.getItem("maxScore");
  if (maxScore === null) {
    maxScore = 0;
  }
  document.getElementById("maxscore").innerText = maxScore;

  birdPosY = game.clientHeight / 2.5;
  birdVelocity = 0;

  // Space event listener for the 'keydown' event
  document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
      jump();
    }
  });
}

function startGame() {
  showScore();
  const birdWidth = bird.clientWidth;
  const gameWidth = game.clientWidth;
  bird.style.left = (gameWidth / 2 - birdWidth / 2) + "px";
  bird.style.top = birdPosY + "px";
  bird.style.display = "block";
  birdVelocity = 0;
  gameStarted = true;
  startContainer.style.display = "none";

  // Show the "Press Space button" message
  document.getElementById("pressSpace").classList.remove("hidden");

  // Retrieve max score from local storage
  maxScore = localStorage.getItem("maxScore") || 0;
  document.getElementById("maxscore").innerText = maxScore;
}

function checkCollision() {
  const birdRect = bird.getBoundingClientRect();
  const birdCenterX = birdRect.left + birdRect.width / 2;
  const birdCenterY = birdRect.top + birdRect.height / 2;
  const birdRadius = birdRect.width / 2;

  const pipeElements = document.getElementsByClassName("pipe");
  for (let pipe of pipeElements) {
    const pipeRect = pipe.getBoundingClientRect();
    if (birdRect.left < pipeRect.right &&
      birdRect.right > pipeRect.left &&
      birdRect.top < pipeRect.bottom &&
      birdRect.bottom > pipeRect.top) {
      return true;
    }
  }

  return false;
}

function incrementScore(pipeLeft, pipeWidth, birdLeft) {
  const birdRight = birdLeft + bird.clientWidth;
  const pipePassed = document.querySelectorAll(".pipe-passed");
  if (pipeLeft + pipeWidth <= birdLeft && pipePassed.length === 0) {
    document.querySelector(".pipe:not([pipePassed])").setAttribute("pipePassed", "true");
  }
  const pipeElements = document.getElementsByClassName("pipe");
  for (let pipe of pipeElements) {
    const pipeRect = pipe.getBoundingClientRect();
    if (birdRight >= pipeRect.left && pipe.getAttribute("pipePassed") === "false") {
      pipe.setAttribute("pipePassed", "true");
      score++;
      document.getElementById("score").innerText = score;
      maxScore = Math.max(maxScore, score);
      console.log('maxScore:', maxScore);
      return true;
    }
  }
  return false;
}

function createPipes() {
  const pipeHeight = game.clientHeight;
  const minPipeHeight = 50;
  const maxPipeHeight = pipeHeight - pipeGap - minPipeHeight;
  const upperPipeHeight = Math.floor(Math.random() * (maxPipeHeight - minPipeHeight + 1) + minPipeHeight);

  const upperPipe = document.createElement("div");
  upperPipe.classList.add("pipe", "upper");
  upperPipe.style.height = upperPipeHeight + "px";
  upperPipe.style.left = game.clientWidth + "px";
  upperPipe.setAttribute("pipePassed", "false"); // Set pipePassed attribute to false
  game.appendChild(upperPipe);

  const lowerPipe = document.createElement("div");
  lowerPipe.classList.add("pipe", "lower");
  lowerPipe.style.height = (pipeHeight - upperPipeHeight - pipeGap) + "px";
  lowerPipe.style.left = game.clientWidth + "px";
  lowerPipe.style.bottom = 0 + "px";
  lowerPipe.setAttribute("pipePassed", "false"); // Set pipePassed attribute to false
  game.appendChild(lowerPipe);

  const passedPipes = document.querySelectorAll(".pipe-passed");
  const numPassedPipes = passedPipes.length;
  const currentScore = parseInt(document.getElementById("score").innerText);

  let initialPipeSpeed = game.clientWidth / 200; // Calculate initial pipe speed based on game container width
  let adjustedPipeSpeed = initialPipeSpeed + (currentScore / 10); // Adjust pipe speed based on current score

  if (currentScore >= 100) {
    pipeGap = 250;
  }
  if (currentScore >= 200) {
    pipeGap = 200;
  }
  if (currentScore >= 300) {
    pipeGap = 150;
  }
  if (currentScore >= 400) {
    pipeGap = 100;
  }
  if (currentScore >= 500) {
    pipeGap = 50;
  }

  const upperPipeDistance = game.clientWidth + upperPipe.clientWidth;
  const lowerPipeDistance = game.clientWidth + lowerPipe.clientWidth;

  // Set the speed of the pipes based on their distance and the adjusted pipe speed
  upperPipe.style.animationDuration = upperPipeDistance / adjustedPipeSpeed + "s";
  lowerPipe.style.animationDuration = lowerPipeDistance / adjustedPipeSpeed + "s";
}

function jump() {
  if (!gameStarted) return;

  if (!firstJump) {
    firstJump = true;
    // Start pipe movement after the first jump
    pipeInterval = setInterval(createPipes, 3000);
    // Hide the "Press Space button" message on the first jump
    document.getElementById("pressSpace").classList.add("hidden");
  }

  birdVelocity = -10;
}

function gameOver() {
  console.log("Game over!");
  gameStarted = false;
  maxScore = Math.max(maxScore, score);
  document.getElementById("currentscore").innerText = score;
  document.getElementById("maxscore").innerText = maxScore;
  localStorage.setItem("maxScore", maxScore);
  gameover.classList.remove("hidden");
  hideScore();
  gameActive = false;
}

function gameLoop(timestamp) {
  if (!gameStarted) {
    requestAnimationFrame(gameLoop);
    return;
  }

  const deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  accumulator += deltaTime;

  while (accumulator > dt) {
    accumulator -= dt;

    if (firstJump) {
      birdVelocity += 0.5;
      birdPosY += birdVelocity;
    }

    birdPosY = Math.min(Math.max(birdPosY, 0), game.clientHeight - bird.offsetHeight);
    bird.style.top = birdPosY + "px";

    if (birdPosY >= game.clientHeight - bird.clientHeight) { // Check if bird hits the bottom of the game container
      gameOver();
      return;
    }

    const pipeElements = document.querySelectorAll(".pipe");
    for (const pipe of pipeElements) {
      const pipeLeft = parseInt(pipe.style.left);
      pipe.style.left = (pipeLeft - 2) + "px";

      const birdLeft = parseInt(bird.style.left);
      const pipeWidth = pipe.clientWidth;
      const pipePassed = pipe.dataset.pipepassed === "true";

      if (pipeLeft + pipeWidth <= birdLeft && !pipePassed && pipe.classList.contains("upper")) {
        pipe.dataset.pipepassed = "true";
        score++;
        document.getElementById("score").innerText = score;
      }

      if (pipe.getBoundingClientRect().right < 0) {
        pipe.parentNode.removeChild(pipe);
      }
    }

    if (checkCollision()) {
      gameOver();
      return;
    }
  }

  requestAnimationFrame(gameLoop);
}

function openMenu() {
  location.reload();
}



function resetMaxScore() {
  maxScore = 0;
  document.getElementById("maxscore").innerText = maxScore;
  localStorage.setItem("maxScore", maxScore);
}

function showScore() {
  const scoreText = document.getElementById("score_text");
  scoreText.style.display = "block";
}

function hideScore() {
  const scoreText = document.getElementById("score_text");
  scoreText.style.display = "none";
}



window.onload = function () {
  setup();
  gameLoop();
};