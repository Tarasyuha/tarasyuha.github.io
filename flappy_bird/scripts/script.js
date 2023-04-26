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
let startTime;
let timeElapsed;
let timer;
let currentTime = "00:00";
var maxTime = 0;
var maxLevel = 0;

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

  // Add an event listener for the 'keydown' event on the document
  document.addEventListener("keydown", function (event) {
    // Check if the key pressed is the spacebar
    if (event.code === "Space") {
      // Call the jump() function when the spacebar is pressed
      jump();
    }
  });

  // Add an event listener for the 'mousedown' event on the document
  document.addEventListener("mousedown", function (event) {
    // Check if the left mouse button is clicked (event.button === 0)
    if (event.button === 0) {
      // Call the jump() function when the left mouse button is clicked
      jump();
    }
  });

  // Retrieve max time from local storage
  let maxTime = localStorage.getItem("maxTime");
  if (maxTime === null) {
    maxTime = "00:00";
    localStorage.setItem("maxTime", maxTime); // Set maxTime in local storage if not present
  }
  document.getElementById("maxtime").innerText = maxTime;

  // Retrieve max level from local storage
  let maxLevel = localStorage.getItem("maxLevel");
  if (maxLevel === null) {
    maxLevel = 0;
    localStorage.setItem("maxLevel", maxLevel); // Set maxLevel in local storage if not present
  }
  document.getElementById("maxlevel").innerText = maxLevel;

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
  const pipeElements = document.getElementsByClassName("pipe");
  for (let pipe of pipeElements) {
    if (hasCollided(bird, pipe)) {
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

    // Start the timer
    startTime = new Date();
    timer = setInterval(function () {
      const elapsedTime = new Date() - startTime;
      const minutes = Math.floor(elapsedTime / 60000);
      const seconds = ((elapsedTime % 60000) / 1000).toFixed(0);
      currentTime = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
      displayTimer();
    }, 1000);

    // Display the timer
    document.getElementById("timer").style.display = "block";
  }

  birdVelocity = -10;
}

function gameOver() {
  console.log("Game over!");
  gameStarted = false;
  stopAnimations();
  maxScore = Math.max(maxScore, score);
  document.getElementById("currentscore").innerText = score;
  document.getElementById("maxscore").innerText = maxScore;
  localStorage.setItem("maxScore", maxScore);
  gameover.classList.remove("hidden");
  hideScore();
  gameActive = false;
  document.getElementById("timer").style.display = "none";

  // Save max time to local storage
  localStorage.setItem("maxTime", currentTime);

  // Save max level to local storage
  let currentLevel;
  if (score < 100) {
    currentLevel = 1;
  } else if (score < 200) {
    currentLevel = 2;
  } else if (score < 300) {
    currentLevel = 3;
  }
  const savedMaxLevel = parseInt(localStorage.getItem("maxLevel"));
  if (currentLevel > savedMaxLevel) {
    localStorage.setItem("maxLevel", currentLevel);
  }
}

function gameLoop(timestamp) {
  if (!gameStarted) {
    requestAnimationFrame(gameLoop);
    return;
  }

  // Add this line within the gameLoop function, after updating the score
  displayLevel();

  if (gameStarted) {
    updateTimer();
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
  maxTime = "00:00";
  maxLevel = 0;
  document.getElementById("maxscore").innerText = maxScore;
  document.getElementById("maxtime").innerText = maxTime;
  document.getElementById("maxlevel").innerText = maxLevel;
  localStorage.setItem("maxScore", maxScore);
  localStorage.setItem("maxTime", maxTime);
  localStorage.setItem("maxLevel", maxLevel);
}

function showScore() {
  const scoreText = document.getElementById("score_text");
  const levelText = document.getElementById("level_text"); // Add this line
  scoreText.style.display = "block";
  levelText.style.display = "block"; // Add this line
}


function hideScore() {
  const scoreText = document.getElementById("score_text");
  const levelText = document.getElementById("level_text"); // Add this line
  scoreText.style.display = "none";
  levelText.style.display = "none"; // Add this line
}


function stopAnimations() {
  const pipeLeftElements = document.querySelectorAll('.pipeLeft');
  const pipeLeft2Elements = document.querySelectorAll('.pipeLeft2');

  pipeLeftElements.forEach(pipe => pipe.classList.add('paused'));
  pipeLeft2Elements.forEach(pipe => pipe.classList.add('paused'));
}

function hasCollided(birdElement, pipeElement) {
  const birdRect = birdElement.getBoundingClientRect();
  const pipeRect = pipeElement.getBoundingClientRect();

  const birdBox = {
    x: birdRect.x + 10,
    y: birdRect.y + 10,
    width: birdRect.width - 20,
    height: birdRect.height - 20
  };

  const pipeBox = {
    x: pipeRect.x,
    y: pipeRect.y,
    width: pipeRect.width,
    height: pipeRect.height
  };

  return (
    birdBox.x < pipeBox.x + pipeBox.width &&
    birdBox.x + birdBox.width > pipeBox.x &&
    birdBox.y < pipeBox.y + pipeBox.height &&
    birdBox.y + birdBox.height > pipeBox.y
  );
}

function displayLevel() {
  const levelText = document.getElementById("level_text");
  let level = 1;

  if (score < 100) {
    level = 1;
  } else if (score < 200) {
    level = 2;
  } else if (score < 300) {
    level = "3 (last)";
  }

  levelText.innerText = "Level: " + level;
}

function updateTimer() {
  const currentTime = new Date();
  timeElapsed = Math.floor((currentTime - startTime) / 1000);
  const minutes = Math.floor(timeElapsed / 60);
  const seconds = timeElapsed % 60;

  const formattedMinutes = (minutes < 10 ? '0' : '') + minutes;
  const formattedSeconds = (seconds < 10 ? '0' : '') + seconds;

  document.getElementById("timer").innerText = formattedMinutes + ':' + formattedSeconds;
}

function displayTimer() {
  const timerText = document.getElementById("timer_text");
  timerText.innerText = currentTime;
}

function startTimer() {
  startTime = new Date();
  timer = setInterval(function () {
    const elapsedTime = new Date() - startTime;
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = ((elapsedTime % 60000) / 1000).toFixed(0);
    currentTime = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    displayTimer();
  }, 1000);
}

function resetMaxTimeAndLevel() {
  localStorage.setItem("maxTime", "00:00");
  localStorage.setItem("maxLevel", "0");
  document.getElementById("maxtime").innerText = "00:00";
  document.getElementById("maxlevel").innerText = "0";
}


window.onload = function () {
  setup();
  gameLoop();
};
