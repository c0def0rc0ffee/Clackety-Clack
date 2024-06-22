// Retrieve the game level from the URL parameters
const params = new URLSearchParams(window.location.search);
const LEVEL = params.get('lvl');

// Debug mode flag
const DEBUG_MODE = true; // Set to true to enable debug mode

// DOM Elements
const gameContentID = document.getElementById('GameContent');
const gameContentClass = document.getElementsByClassName('game-content')[0];
const inputElementID = document.getElementById('typedCharacters');
const scoreElementID = document.getElementById('Score');
const levelElementID = document.getElementById('Level');

// Game Variables
const currentLevel = LEVEL;
let score = 0;
let gameOver = false;
let arrWords = [];
let arrWordsDiv = [];
let fallSpeed = 1; // Slower fall speed
const usedWords = new Set(); // Track used words to prevent repetition

// Initialise the game
function init() {
  showLevel();
  if (['1', '2', '3', '4'].indexOf(currentLevel) === -1) {
    gameOver = true;
    window.location.replace("index.html");
  }
  const filteredDictionary = getDictionaryByLevel(currentLevel);
  setInterval(() => {
    if (!gameOver) {
      drawElement(filteredDictionary);
    }
  }, currentLevel * 750); // Adjusted frequency of words falling
  updateWordPosition();
}

// Get the dictionary based on the game level
function getDictionaryByLevel(level) {
  switch (level) {
    case '1':
      return Easy_Words; // Easy: 4 letters or less
    case '2':
      return Medium_Words; // Medium: 5-7 letters
    case '3':
      return Hard_Words; // Hard: 8-10 letters
    case '4':
      return Ultimate_Words; // Ultimate Badass: 10+ letters
    default:
      return Easy_Words; // Default to easy level words
  }
}

// Calculate the maximum word length based on the game level
function getMaxWordLength(level) {
  switch (level) {
    case '1':
      return 4;
    case '2':
      return 7;
    case '3':
      return 10;
    case '4':
      return 25; // Just a high number to cover long words in Ultimate
    default:
      return 4;
  }
}

// Create a word element, store it in arrays, and set its initial position
function drawElement(dictionary) {
  // Limit the number of words shown at once to 10
  if (arrWords.length >= 10) return;
  
  let word;
  do {
    word = generateRandomWord(dictionary);
  } while (usedWords.has(word));
  usedWords.add(word);
  arrWords.push(word);
  const wordDiv = document.createElement('div');
  wordDiv.innerHTML = `<p>${word}</p>`;
  wordDiv.classList.add('word');
  wordDiv.style.top = '-2px';
  wordDiv.style.zIndex = '1';
  gameContentID.appendChild(wordDiv);
  
  // Ensure words start within the game area and do not overlap
  let leftPos;
  let overlap;
  const maxWordLength = getMaxWordLength(currentLevel);
  const wordLength = word.length;
  const maxWordWidth = Math.min(wordLength, maxWordLength) * 15; // Estimate width per character (adjusted to 15px for better spacing)
  do {
    leftPos = Math.random() * (gameContentID.clientWidth - maxWordWidth);
    wordDiv.style.left = `${leftPos}px`; // Temporarily set left to calculate correct bounding box
    overlap = arrWordsDiv.some(div => {
      const rect1 = div.getBoundingClientRect();
      const rect2 = wordDiv.getBoundingClientRect();
      return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
    });
  } while (overlap);
  wordDiv.style.left = `${leftPos}px`;
  arrWordsDiv.push(wordDiv);
}

// Get a random word from the provided dictionary
function generateRandomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}

// Check the input word, update the score, and remove the matched word
function getWord(lastKeyPressed) {
  if (lastKeyPressed !== undefined) {
    const inputValue = inputElementID.textContent.toLowerCase();
    if (arrWords.includes(inputValue)) {
      inputElementID.textContent = '';
      updateScore();
      const indexWord = arrWords.indexOf(inputValue);
      const wordDivIndex = arrWordsDiv[indexWord];
      arrWords.splice(indexWord, 1);
      arrWordsDiv.splice(indexWord, 1);
      wordDivIndex.parentNode.removeChild(wordDivIndex);
      return true;
    }
  }
  return false;
}

// Update the position of falling words and handle game over condition
function updateWordPosition() {
  setInterval(() => {
    if (!gameOver) {
      const wordText = document.getElementsByClassName('word');
      for (let i = 0; i < arrWords.length; i++) {
        const topVal = parseInt(wordText[i].style.top.replace('px', ''));
        if (topVal + 15 > gameContentID.clientHeight) {
          if (!DEBUG_MODE) {
            gameOver = true;
            gameContentID.innerHTML = modalGameOver();
          } else {
            // In debug mode, reset word position to top
            wordText[i].style.top = '-2px';
          }
        } else {
          wordText[i].style.top = `${topVal + fallSpeed}px`;
        }
      }
    }
  }, 20);
}

// Update the score display
function updateScore() {
  score += 10;
  scoreElementID.innerHTML = `<p>Score: ${score}</p>`;
}

// Display the current game level
function showLevel() {
  const levels = ['EASY', 'MEDIUM', 'HARD', 'Ultimate Badass!'];
  if (currentLevel > 0 && currentLevel <= levels.length) {
    levelElementID.innerHTML = `<p>Level: ${levels[currentLevel - 1]}</p>`;
  }
}

// Display the game over modal with score and options to restart or go back to menu
function modalGameOver() {
  return `
    <div class="modal-gameover col-8">
      <h1> Game Over </h1>
      <h2> Score: ${score} </h2>
      <button id="Restart" class="btn-modal">
        <a href="game.html?lvl=${currentLevel}" style="text-decoration: none;"><h6>Restart</h6></a>
      </button>
      <button id="Menu" class="btn-modal my-2">
        <a href="index.html" style="text-decoration: none;"><h6>Back to menu</h6></a>
      </button>
    </div>
  `;
}

// Start the game
init();
