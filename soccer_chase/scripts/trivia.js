const triviaData = [
    // Example question objects:
    // {
    //   question: "What is the capital of France?",
    //   options: ["London", "Paris", "Berlin", "Madrid"],
    //   answer: "Paris",
    //   points: 10,
    //   difficulty: "Medium",
    //   category: "Geography"
    // },
    // Add more question objects here
    {
      question: "In what year was the FIFA World Cup first held?",  
      options: ["1930", "1928", "1938", "1934"],
      answer: "1930",
      points: 5,
      difficulty: "Easy",
      category: "World Cup History"
    },
    {
      question: "Which nation won the FIFA World Cup in 1954, famously known for their 'Miracle of Bern' victory?",  
      options: ["France", "Brazil", " West Germany", "Argentina"],
      answer: " West Germany",
      points: 5,
      difficulty: "Easy",
      category: "World Cup History"
    },
    {
      question: "In which year did England win their only FIFA World Cup title?",  
      options: ["1934", "1956", " 1998", "1966"],
      answer: "1966",
      points: 5,
      difficulty: "Easy",
      category: "World Cup History"
    },
    {
      question: "How many times has Brazil won the FIFA World Cup?",
      options: ["3", "5", "4", "7"],
      answer: "5",
      points: 10,
      difficulty: "Medium",
      category: "World Cup History"
    },
    {
      question: "Who holds the record for the most goals scored in a single FIFA World Cup tournament?",
      options: ["Davor Suker", "Didier Deschamps", " Just Fontaine", "Miroslav Klose"],
      answer: " Just Fontaine",
      points: 10,
      difficulty: "Medium",
      category: "World Cup History"
    },
    {
      question: "Which country won the FIFA World Cup in 1998?",
      options: ["Brazil", "France", "Urguay", "Italy"],
      answer: "France",
      points: 10,
      difficulty: "Medium",
      category: "World Cup History"
    },
    {
      question: "Who scored the infamous 'Hand of God' goal in the 1986 FIFA World Cup?",
      options: ["Pelé", "Just Fontaine", "Dino Zoff", "Diego Maradona"],
      answer: "Diego Maradona",
      points: 15,
      difficulty: "Hard",
      category: "World Cup History"
    },
    {
      question: "Which nation won the FIFA World Cup in 2010?",
      options: ["Qatar", "Germany", "Poland", "Spain"],
      answer: "Spain",
      points: 15,
      difficulty: "Hard",
      category: "World Cup History"
    },
    {
      question: "Who scored the winning goal in the final of the 2014 FIFA World Cup?",
      options: ["Mario Götze", "Edgar Davids", "Luigi Riva", "Pavel Nedved"],
      answer: "Mario Götze",
      points: 15,
      difficulty: "Hard",
      category: "World Cup History"
    },
    {
      question: "Which country hosted the FIFA World Cup in 2002?",  
      options: ["Germany", "South Korea and Japan", "Brazil", "United States"],
      answer: "South Korea and Japan",
      points: 5,
      difficulty: "Easy",
      category: "FIFA World Cup Hosts"
    },
    {
      question: "How many times has Mexico hosted the FIFA World Cup?",  
      options: ["2", "1", "0", "3"],
      answer: "2",
      points: 5,
      difficulty: "Easy",
      category: "FIFA World Cup Hosts"
    },
    {
      question: "Which nation hosted the FIFA World Cup in 2022?",  
      options: ["Qatar", "Urguay", "Mexico", "Chile"],
      answer: "Qatar",
      points: 5,
      difficulty: "Easy",
      category: "FIFA World Cup Hosts"
    },
    {
      question: "In which year did Italy last host the FIFA World Cup?",    
      options: ["1994", "1986", "1990", "1996"],
      answer: "1990",
      points: 10,
      difficulty: "Medium",
      category: "FIFA World Cup Hosts"
    },
    {
      question: "Name the only African country to have hosted the FIFA World Cup so far.",    
      options: ["Morocco", "South Africa", "Nigeria", "Cameroon"],
      answer: "South Africa",
      points: 10,
      difficulty: "Medium",
      category: "FIFA World Cup Hosts"
    },
    {
      question: "In which year did Germany host its first FIFA World Cup after reunification?",    
      options: ["2002", "1986", "1974", "2006"],
      answer: "2006",
      points: 10,
      difficulty: "Medium",
      category: "FIFA World Cup Hosts"
    },
    {
      question: "Which nation hosted the FIFA World Cup in 1978?",
      options: ["Mexico", "Spain", "Argentina", "Italy"],
      answer: "Argentina",
      points: 15,
      difficulty: "Hard",
      category: "FIFA World Cup Hosts"
    },   
    {
      question: "Which country hosted the FIFA World Cup in 1966?",
      options: ["Sweden", "England", "Switzerland", "France"],
      answer: "England",
      points: 15,
      difficulty: "Hard",
      category: "FIFA World Cup Hosts"
    },   
    {
      question: "Who hosted the FIFA World Cup in 1950?",
      options: ["Sweden", "Brazil", "United States", "South Korea"],
      answer: "Sweden",
      points: 15,
      difficulty: "Hard",
      category: "FIFA World Cup Hosts"
    },   
    {
      question: "Who is often referred to as the 'Black Pearl' and is considered one of the greatest footballers of all time?",
      options: ["Paradona", "Pelé", "Ronaldo", "Cruyff "],
      answer: "Pelé",
      points: 5,
      difficulty: "Easy",
      category: "Soccer Legends"
    },  
    {
      question: "Which Italian defender, known for his tenacity and leadership, captained Italy to victory in the 2006 FIFA World Cup?",
      options: ["Rui Costa", "Luigi Riva", "Paul Gascoigne", "Fabio Cannavaro"],
      answer: "Fabio Cannavaro",
      points: 5,
      difficulty: "Easy",
      category: "Soccer Legends"
    },  
    {
      question: "Who is the French footballer who won the FIFA World Cup as both a player and a manager?",
      options: ["Jean-Pierre Papin", "Oleg Blohkin", "Didier Deschamps", "Ruud Gullit"],
      answer: "Didier Deschamps",
      points: 5,
      difficulty: "Easy",
      category: "Soccer Legends"
    },  
    {
      question: "Which legendary goalkeeper won the FIFA World Cup with Italy in 1982 and is known for his exceptional saves?",
      options: ["Dino Zoff", "Messi", "Zinedine Zidane", "George Best"],
      answer: "Dino Zoff",
      points: 10,
      difficulty: "Medium",
      category: "Soccer Legends"
    },
    {
      question: "Which Argentine footballer is famous for his time at Napoli and for leading Argentina to victory in the 1986 FIFA World Cup?",
      options: ["Julio Cesar Romero", "Bruno Conti", "Diego Maradona", "Paolo Rossi"],
      answer: "Diego Maradona",
      points: 10,
      difficulty: "Medium",
      category: "Soccer Legends"
    },
    {
      question: "Which player holds the record for most goals scored in FIFA World Cup history?",
      options: ["Miroslav Klose", " Just Fontaine", "Hector Scarone", "Gabriel Batistuta"],
      answer: "Miroslav Klose",
      points: 10,
      difficulty: "Medium",
      category: "Soccer Legends"
    },
    {
      question: "Who is the Argentine footballer known for his incredible dribbling skills and is often compared to Diego Maradona?",
      options: ["Franz Beckenbauer", "Michel Platini", "Lionel Messi", "Diego Maradona"],
      answer: "Lionel Messi",
      points: 15,
      difficulty: "Hard",
      category: "Soccer Legends"
    },
    {
      question: "Which soccer legend has won the most FIFA Ballon d'Or awards?",
      options: ["Johan Cruyff", "Lionel Messi", "cristiano ronaldo", "Diego Maradona"],
      answer: "Lionel Messi",
      points: 15,
      difficulty: "Hard",
      category: "Soccer Legends"
    },
    {
      question: "Who is the first goalkeeper to have won the golden ball award in FIFA World Cup?",
      options: ["Lev Yashin", "Oliver Khan", "Gianluigui Buffon", "Dino Zoff"],
      answer: "Lev Yashin",
      points: 15,
      difficulty: "Hard",
      category: "Soccer Legends"
    },
    {
      question: "Who won the FIFA Women's World Cup in 2019?",
      options: ["Netherlands", "China", "Germany", "United States"],
      answer: "United States",
      points: 5,
      difficulty: "Easy",
      category: "Women's Soccer"
    },
    {
      question: "Which country hosted the inaugural FIFA Women's World Cup in 1991?",
      options: ["United States", "China", "Germany", "Brazil"],
      answer: "China",
      points: 5,
      difficulty: "Easy",
      category: "Women's Soccer"
    },
    {
      question: "Who scored the fastest hat-trick in FIFA Women's World Cup history?",
      options: ["Carli Lloyd", "Birgit Prinz", "Fabienne Humm", "Abby Wambach"],
      answer: "Carli Lloyd",
      points: 5,
      difficulty: "Easy",
      category: "Women's Soccer"
    },
    {
      question: "How many times has the United States women's national soccer team won the FIFA Women's World Cup?",
      options: ["2", "4", "6", "1"],
      answer: "4",
      points: 10,
      difficulty: "Medium",
      category: "Women's Soccer"
    },
    {
      question: "Which team won the FIFA Women's World Cup in 2015?",
      options: ["Australia", "Nigeria", "United States", "Sweden"],
      answer: "United States",
      points: 10,
      difficulty: "Medium",
      category: "Women's Soccer"
    },
    {
      question: "Name the first African nation to win a match in the FIFA Women's World Cup",
      options: ["Egypt", "Nigeria", "Morocco", "Senegal"],
      answer: "Nigeria",
      points: 10,
      difficulty: "Medium",
      category: "Women's Soccer"
    },
    {
      question: "Name the Brazilian footballer often regarded as one of the greatest female players of all time.",
      options: ["Christine Sinclair ", "Marta", " Birgit Prinz", "Mia Hamm"],
      answer: "Marta",
      points: 15,
      difficulty: "Hard",
      category: "Women's Soccer"
    },
    {
      question: "How many teams participated in the first FIFA Women's World Cup?",
      options: ["12", "14", "10", "16"],
      answer: "12",
      points: 15,
      difficulty: "Hard",
      category: "Women's Soccer"
    },
    {
      question: "Who is the all-time leading goal scorer in FIFA Women's World Cup history?",
      options: ["Michelle Akers", "Abby Wambach", "Birgit Prinz", "Marta"],
      answer: "Marta",
      points: 15,
      difficulty: "Hard",
      category: "Women's Soccer"
    },
    {
      question: "What does 'parking the bus' mean in soccer?",
      options: ["Offensive Strategy ", "Ball Control", "Defensive strategy", "Goalkeeper"],
      answer: "Defensive strategy",
      points: 5,
      difficulty: "Easy",
      category: "Soccer Slang & Lingo"
    },
    {
      question: "What is a 'backheel'?",
      options: ["Back Flick", "Reverse Strike", "Back Heel", "Heel kick"],
      answer: "Heel kick",
      points: 5,
      difficulty: "Easy",
      category: "Soccer Slang & Lingo"
    },
    {
      question: "What is 'offside trap'?",
      options: ["Offside Manuver", "Defensive line", "Trap Kick", "Offside Strategy"],
      answer: "Defensive line",
      points: 5,
      difficulty: "Easy",
      category: "Soccer Slang & Lingo"
    },
    {
      question: "What is 'dribbling'?",
      options: ["Ball Control", "Acrobatic Shot", "Heel Kick", "kickoff"],
      answer: "Ball Control", 
      points: 10,
      difficulty: "Medium",
      category: "Soccer Slang & Lingo"
    },
    {
      question: "What's a 'hat-trick'?",
      options: ["Long Range Goal", "Penalty Kick", "Three goals", "High Looping Shot"],
      answer: "Three goals", 
      points: 10,
      difficulty: "Medium",
      category: "Soccer Slang & Lingo"
    },
    {
      question: "What's a 'golden goal'?",
      options: ["Five Goals", "Winning goal", "Penalty Goal", "Extra Time Goal"],
      answer: "Extra Time goal", 
      points: 10,
      difficulty: "Medium",
      category: "Soccer Slang & Lingo"
    },
    {
      question: "What is a 'scissor kick'?",
      options: ["Goal Technique", "Acrobatic Shot", "Defensive Block", "Referee caution "],
      answer: "Acrobatic Shot", 
      points: 15,
      difficulty: "Hard",
      category: "Soccer Slang & Lingo"
    },
    {
      question: "What term refers to a rule where a player is in an illegal position if they are nearer to the opponent's goal line than both the ball and the second-to-last defender?",
      options: ["Hand Ball Offense", "Obstruction Foul", "Offside", "Positional Infringement"],
      answer: "Offside", 
      points: 15,
      difficulty: "Hard",
      category: "Soccer Slang & Lingo"
    },
    {
      question: "What term refers to a technique where the player slides on the ground to tackle the ball away from an opponent?",
      options: ["Sliding Tackle", "Sweep Tackle", "Defensive Tackle", "Grass Tackle"],
      answer: "Sliding Tackle", 
      points: 15,
      difficulty: "Hard",
      category: "Soccer Slang & Lingo"
    },
    {
      question: "How long does a soccer match last? ",
      options: ["120 Minutes", "45 Minutes", "60 Minutes", "90 Minutes"],
      answer: "90 Minutes", 
      points: 5,
      difficulty: "Easy",
      category: "Rules & Regulations"
    },
    {
      question: "What is the maximum number of players allowed on the field for each team in a standard soccer match?",
      options: ["11", "7", "15", "9"],
      answer: "11", 
      points: 5,
      difficulty: "Easy",
      category: "Rules & Regulations"
    },
    {
      question: "What is the punishment for a player who accumulates five yellow cards in a tournament? ",
      options: ["Automatic Suspension", "Player Fine", "Mandatory Subsitution", "1 match Suspension"],
      answer: "1 match Suspension", 
      points: 5,
      difficulty: "Easy",
      category: "Rules & Regulations"
    },
    {
      question: "What is the maximum number of substitutions allowed in a FIFA-sanctioned match?",
      options: ["3", "5", "1", "7"],
      answer: "3", 
      points: 10,
      difficulty: "Medium",
      category: "Rules & Regulations"
    },
    {
      question: "What is the minimum number of players required for a soccer match to start?",
      options: ["8", "5", "11", "7"],
      answer: "7", 
      points: 10,
      difficulty: "Medium",
      category: "Rules & Regulations"
    },
    {
      question: "What's the role of the Video Assistant Referee (VAR)?",
      options: ["Assist referee decisions", "Video Review", "Referee Consultation", "Match Analysis"],
      answer: "Assist referee decisions", 
      points: 10,
      difficulty: "Medium",
      category: "Rules & Regulations"
    },
    {
      question: "What happens if a player receives a red card in soccer?",
      options: ["Ejection from game", "Suspension from game", "Penalty Shot", "Foul Shot"],
      answer: "Ejection from game", 
      points: 15,
      difficulty: "Hard",
      category: "Rules & Regulations"
    },
    {
      question: "What happens if the ball becomes defective?",
      options: ["Game Interuption", "Play Continues", "Penalty Shot", "Ball Replacement"],
      answer: "Play is stopped", 
      points: 15,
      difficulty: "Hard",
      category: "Rules & Regulations"
    },
    {
      question: "What happens if a goalkeeper handles the ball outside their penalty area?",
      options: ["Goalkeeper Expulsion", "Penalty Kick", "Direct Free kick for opponent", "Indirect Free kick for opponent"],
      answer: " Direct Free kick for opponent", 
      points: 15,
      difficulty: "Hard",
      category: "Rules & Regulations"
    },

  ];

  let currentQuestionIndex = 0;
  let score = 0;
  let selectedDifficulty = "";
  let categories = [];

  const welcomeContainer = document.getElementById("welcome-container");
  const difficultyContainer = document.getElementById("difficulty-container");
  const categoryContainer = document.getElementById("category-container");
  const questionContainer = document.getElementById("question-container");
  const answerContainer = document.getElementById("answer-container");
  const summaryContainer = document.getElementById("summary-container");
  const startGameBtn = document.getElementById("start-game-btn");
  const easyBtn = document.getElementById("easy-btn");
  const mediumBtn = document.getElementById("medium-btn");
  const hardBtn = document.getElementById("hard-btn");
  const randomBtn = document.getElementById("random-btn");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const answerFeedbackElement = document.getElementById("answer-feedback");
  const pointsElement = document.getElementById("points");
  const nextQuestionBtn = document.getElementById("next-question-btn");
  const totalPointsElement = document.getElementById("total-points");
  let selectedCategory = '';

  startGameBtn.addEventListener("click", showDifficultyContainer);

  function showDifficultyContainer() {
    welcomeContainer.style.display = "none";
    difficultyContainer.style.display = "block";
  }

  easyBtn.addEventListener("click", () => selectDifficulty("Easy"));
  mediumBtn.addEventListener("click", () => selectDifficulty("Medium"));
  hardBtn.addEventListener("click", () => selectDifficulty("Hard"));
  randomBtn.addEventListener("click", () => selectDifficulty("Random"));

  function selectDifficulty(difficulty) {
    selectedDifficulty = difficulty;
    if (selectedDifficulty !== "Random") {
      difficultyContainer.style.display = "none";
      categoryContainer.style.display = "block";
      generateCategoryButtons();
    } else {
      difficultyContainer.style.display = "none"; // Hide difficulty container for Random difficulty
      categoryContainer.style.display = "block"; // Show category selection for Random difficulty
      generateCategoryButtons();
    }
  }

  function generateCategoryButtons() {
    // Clear existing buttons
    categoryContainer.innerHTML = "<h2>Choose Category:</h2>";
    
    // Create a new container for the buttons
    const buttonContainer = document.createElement("div");
    // Set the display to grid
    buttonContainer.style.display = "grid";
    buttonContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
    buttonContainer.style.gap = "20px";
    
    // Extract unique categories
    categories = [...new Set(triviaData.map(question => question.category))];
    // Create buttons for each category
    categories.forEach(category => {
      const categoryBtn = document.createElement("button");
      categoryBtn.textContent = category;
      categoryBtn.style.color = "#F6F6F6"; // Change the text color
      categoryBtn.style.background = "linear-gradient(45deg, rgba(23, 23, 23, 0.75), rgba(119, 119, 119, 0.00), rgba(119, 119, 119, 0.20))";
      categoryBtn.style.border = "2px solid var(--Light-gradient, rgba(115, 115, 115, 0.80))"; // Set the border
      categoryBtn.style.borderRadius = "17px"; // Set the border radius
      categoryBtn.style.padding = "30px 40px"; // Add padding
      categoryBtn.style.margin = "5px"; // Add margin
      categoryBtn.style.cursor = "pointer"; // Change the cursor on hover
      categoryBtn.style.width = "146px"; // Set the width
      categoryBtn.style.height = "130px"; // Set the height
      categoryBtn.addEventListener("click", () => startGame(category));
      buttonContainer.appendChild(categoryBtn);
    });
  
    // Append the button container to the category container
    categoryContainer.appendChild(buttonContainer);
  }

  function startGame(category) {
    let filteredQuestions;
    if (selectedDifficulty === "Random") {
      filteredQuestions = triviaData.filter(question => question.category === category);
    } else {
      filteredQuestions = triviaData.filter(question => {
        return question.difficulty === selectedDifficulty && question.category === category;
      });
    }
    if (filteredQuestions.length > 0) {
      triviaData.length = 0; // Clear existing questions
      filteredQuestions.forEach(question => {
        triviaData.push(question); // Add filtered questions
      });
      sortQuestions();
      showQuestion();
      categoryContainer.style.display = "none"; // Hide category container
      questionContainer.style.display = "block"; // Show question container
    } else {
      alert("No questions found for the selected difficulty and category.");
    }
  }

  // Function to sort questions by difficulty and category
  function sortQuestions() {
    triviaData.sort((a, b) => {
      if (a.difficulty !== b.difficulty) {
        // Sort by difficulty
        const difficultyOrder = { "Easy": 0, "Medium": 1, "Hard": 2 };
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      } else {
        // If difficulty is the same, sort by category
        return a.category.localeCompare(b.category);
      }
    });
  }

  function showQuestion() {
    const currentQuestion = triviaData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
      const optionElement = document.createElement("button");
      optionElement.textContent = option;
      optionElement.style.fontFamily = "Bitter"; // Set the height
      optionElement.style.fontSize = "20px "; // Set the height
      optionElement.style.fontWeight = "regular"; // Set the height
      optionElement.style.textAlign = "center"; // Align text horizontally
      optionElement.style.color = "#F6F6F6"; // Change the text color
      optionElement.style.background = "linear-gradient(45deg, rgba(23, 23, 23, 0.75), rgba(119, 119, 119, 0.00), rgba(119, 119, 119, 0.20))";
      optionElement.style.border = "2px solid var(--Light-gradient, rgba(115, 115, 115, 0.80))"; // Set the border
      optionElement.style.borderRadius = "17px"; // Set the border radius
      optionElement.style.padding = "30px 40px"; // Add padding
      optionElement.style.margin = "5px"; // Add margin
      optionElement.style.cursor = "pointer"; // Change the cursor on hover
      optionElement.style.width = "146px"; // Set the width
      optionElement.style.height = "130px"; // Set the height
      optionElement.style.display = "flex"; // Make the option box a flex container
      optionElement.style.justifyContent = "center"; // Center children horizontally
      optionElement.style.alignItems = "center"; // Center children vertically
      optionElement.addEventListener("click", () => checkAnswer(option, currentQuestion.points));
      optionsElement.appendChild(optionElement);
    });
    // Hide next question button if last question is reached
    if (currentQuestionIndex === triviaData.length - 1) {
      nextQuestionBtn.style.display = "none";
    } else {
      nextQuestionBtn.style.display = "block";
    }
  }

  function checkAnswer(selectedAnswer, points) {
    const currentQuestion = triviaData[currentQuestionIndex];
    let isCorrect;
    let pointsChange; // Points earned or lost for this question
    if (selectedAnswer === currentQuestion.answer) {
      score += points;
      isCorrect = true;
      pointsChange = points; // Points earned
  
      // Update points earned in localStorage
      let pointsEarned = localStorage.getItem('pointsEarned');
      pointsEarned = pointsEarned ? Number(pointsEarned) + points : points;
      localStorage.setItem('pointsEarned', pointsEarned.toString());
    } else {
      score -= points;
      isCorrect = false;
      pointsChange = -points; // Points lost
  
      // Update points lost in localStorage
      let pointsLost = localStorage.getItem('pointsLost');
      pointsLost = pointsLost ? Number(pointsLost) + pointsChange : pointsChange;
      localStorage.setItem('pointsLost', pointsLost.toString());
    }
  
    // Calculate overall score as points earned minus points lost
    let pointsEarned = Number(localStorage.getItem('pointsEarned'));
    let pointsLost = Number(localStorage.getItem('pointsLost'));
    let overallScore = pointsEarned - (-pointsLost);
  
    // Update overall score in localStorage
    localStorage.setItem('overallScore', overallScore.toString());
  
    showAnswerFeedback(selectedAnswer, isCorrect, pointsChange);
  
    // Show summary screen after showing feedback for last question
    if (currentQuestionIndex === triviaData.length - 1) {
      setTimeout(() => {
        showFeedbackNextButton();
      }, 0); // Wait for 2 seconds before showing feedback
    }
    pointsElement.textContent = pointsChange + " Points"; // Show pointsChange instead of total score

  }

  function showAnswerFeedback(feedback, isCorrect) {
    questionContainer.style.display = "none";
    answerContainer.style.display = "block";
    answerFeedbackElement.textContent = feedback;
    pointsElement.textContent = score + " Points";
    if (isCorrect) {
      pointsElement.style.color = "#D7FF32"; // Style for correct answer
    } else {
      pointsElement.style.color = "#FF8832"; // Style for incorrect answer
    }
      
  }

  function showFeedbackNextButton() {
    nextQuestionBtn.textContent = "Next";
    nextQuestionBtn.removeEventListener("click", nextQuestion);
    nextQuestionBtn.addEventListener("click", showSummary);
    nextQuestionBtn.style.display = "block";
  }

  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < triviaData.length) {
      questionContainer.style.display = "block";
      answerContainer.style.display = "none";
      showQuestion();
    }
  }

  function showSummary() {
    answerContainer.style.display = "none";
    summaryContainer.style.display = "block";
    totalPointsElement.textContent = score;
  }

  nextQuestionBtn.addEventListener("click", nextQuestion);
  
  window.onload = function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      if (item.href.includes(currentPage)) {
        item.classList.add('active');
      }
    });
  };