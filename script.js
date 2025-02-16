// DOM elements
const homescreen = document.getElementById("homescreen");
const gameContainer = document.getElementById("game-container");
const startButton = document.getElementById("start-button");

// Show the game container and hide the homescreen when the start button is clicked
startButton.addEventListener("click", () => {
  homescreen.classList.add("hidden");
  gameContainer.classList.remove("hidden");
});

// Dialogue and story data
const story = [
  {
    text: "Welcome, Interdimensional Plumber! The multiverse is in chaos. Sentient toilets are rebelling. Are you ready to face the Great Flush?",
    choices: [
      { text: "Yes, I'm ready!", next: 1 },
      { text: "No, I'm scared of toilets.", next: 2 }
    ]
  },
  {
    text: "You enter the first dimension: the Land of Endless Toilet Paper. A French bidet approaches you. 'Ah, mon ami! You dare approach me with your primitive plunger?'",
    choices: [
      { text: "Negotiate with the bidet.", next: 3 },
      { text: "Attack with your plunger!", next: 4 }
    ]
  },
  {
    text: "You run away, but the toilets find you anyway. Game over.",
    choices: []
  },
  {
    text: "The bidet agrees to join your cause. You gain a new ally!",
    choices: [
      { text: "Continue to the next dimension.", next: 5 }
    ]
  },
  {
    text: "You attack the bidet, but it overpowers you with a jet of water. Game over.",
    choices: []
  },
  {
    text: "You enter the next dimension: the Neon Sewer. A goth toilet blocks your path. 'Life is meaningless... just like your attempts to fix me.'",
    choices: [
      { text: "Challenge it to a dance-off.", next: 6 },
      { text: "Flush it first!", next: 7 }
    ]
  }
];

// Game state
let currentStep = 0;

// DOM elements for the game
const dialogueText = document.getElementById("dialogue-text");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");

// Update the game based on the current step
function updateGame() {
  const step = story[currentStep];
  dialogueText.textContent = step.text;

  if (step.choices.length > 0) {
    choice1.textContent = step.choices[0].text;
    choice1.onclick = () => chooseOption(step.choices[0].next);

    choice2.textContent = step.choices[1].text;
    choice2.onclick = () => chooseOption(step.choices[1].next);
  } else {
    choice1.style.display = "none";
    choice2.style.display = "none";
  }
}

// Handle player choices
function chooseOption(nextStep) {
  currentStep = nextStep;
  updateGame();
}
// DOM elements
const toilet1 = document.getElementById("toilet-1");
const toilet2 = document.getElementById("toilet-2");

// Function to check if a toilet is off-screen
function isOffScreen(toilet) {
  const rect = toilet.getBoundingClientRect();
  return rect.right < 0 || rect.left > window.innerWidth;
}

// Function to switch toilets
function switchToilets() {
  if (isOffScreen(toilet1)) {
    toilet1.classList.add("hidden");
    toilet2.classList.remove("hidden");
    toilet2.style.animation = "float 10s linear infinite"; // Restart animation
  } else if (isOffScreen(toilet2)) {
    toilet2.classList.add("hidden");
    toilet1.classList.remove("hidden");
    toilet1.style.animation = "float 10s linear infinite"; // Restart animation
  }
}

// Check for off-screen toilets every 100ms
setInterval(switchToilets, 100);

// Start the game (after clicking the start button)
updateGame();