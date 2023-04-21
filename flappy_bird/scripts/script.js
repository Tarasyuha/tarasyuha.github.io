let bird;
let game;
let startBtn;
let birdPosY;
let birdVelocity;
let gameStarted = false;
let pipeInterval;
let score = 0;
let gameover;
let playBtn;
let pipeGap = 300;
let firstJump = false;
let lastTime = 0;
const dt = 1000 / 60; // 60 frames per second
let accumulator = 0;
let maxScore = 0;

function setup() {
  bird = document.getElementById("bird");
  game = document.getElementById("game");
  startBtn = document.getElementById("startBtn");
  gameover = document.getElementById("gameover");
  playBtn = document.getElementById("startBtn");
  gameover.classList.add("hidden");

  // Retrieve max score from scores.json file
  fetch('scores.json')
    .then(response => response.json())
    .then(data => {
      maxScore = data.maxScore;
      document.getElementById("maxscore").innerText = maxScore;
    })
    .catch(error => {
      console.error('Error retrieving max score from file:', error);
    });

  birdPosY = game.clientHeight / 4;
  birdVelocity = 0;

  // Space event listener for the 'keydown' event
  document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
      jump();
    }
  });
}


function startGame() {
  const birdWidth = bird.clientWidth;
  const gameWidth = game.clientWidth;
  bird.style.left = (gameWidth / 2 - birdWidth / 2) + "px";
  bird.style.top = birdPosY + "px";
  bird.style.display = "block";
  birdVelocity = 0;
  gameStarted = true;
  startContainer.style.display = "none";
  pipeInterval = setInterval(createPipes, 2500);

  // Show the "Press Space button" message
  document.getElementById("pressSpace").classList.remove("hidden");
  document.getElementById("maxscore").innerText = maxScore;

}

function checkCollision() {
  const birdRect = bird.getBoundingClientRect();

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

maxScore = Math.max(maxScore, score);
document.getElementById("maxscore").innerText = maxScore;
fetch('scores.json')
  .then(response => response.json())
  .then(data => {
    const updatedMaxScore = Math.max(data.maxScore, maxScore);
    const newData = { maxScore: updatedMaxScore };
    const jsonData = JSON.stringify(newData);
    return fetch('scores.json', {
      method: 'PUT',
      body: jsonData,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  })
  .then(response => {
    console.log('Score data saved to file:', response);
  })
  .catch(error => {
    console.error('Error saving score data to file:', error);
  });



function jump() {
  if (!gameStarted) return;

  if (!firstJump) {
    firstJump = true;
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

  // Update max score in JSON file
  fetch('scores.json')
    .then(response => response.json())
    .then(data => {
      const updatedMaxScore = Math.max(data.maxScore, maxScore);
      const newData = { maxScore: updatedMaxScore };
      const jsonData = JSON.stringify(newData);
      return fetch('scores.json', {
        method: 'PUT',
        body: jsonData,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    })
    .then(response => {
      console.log('Score data saved to file:', response);
    })
    .catch(error => {
      console.error('Error saving score data to file:', error);
    });
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

window.onload = function () {
  setup();
  gameLoop();
};