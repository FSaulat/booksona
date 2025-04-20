// =====================================
// 1. Quiz Data
// =====================================
const questions = [
  {
    question: "1. How do you organize your bookshelf?",
    type: "single", // radio buttons
    options: [
      "Alphabetically by author or title",
      "By genre",
      "By vibes or emotional impact",
      "Chaotically — I know where things are, I promise",
      "I don't own books, I read digitally or borrow"
    ]
  },
  {
    question: "2. What's your go-to genre for escapism?",
    type: "single", // radio buttons
    options: [
      "Love stories – Romance, romcoms, heartbreaks",
      "Fantasy escape – Magical worlds, mythology, romantasy",
      "Poetic sadness – Literary fiction, lyrical prose, emotion-heavy",
      "Cozy mystery – Whodunits, thrillers, dark academia",
      "Epic drama – Rebellions, kingdoms, dystopia, sci-fi",
      "Hidden secrets – Contemporary, magical realism, mystery",
      "Historical vibes – War novels, vintage drama, period fiction"
    ]
  }
];

// =====================================
// 2. State + DOM References
// =====================================
let currentQuestionIndex = 0; // Tracks which question user is on
const userAnswers = new Array(questions.length).fill(null); // Stores answers by question index

// Grab references to DOM elements
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const startBtn = document.getElementById("start-button");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const quizContainer = document.querySelector("main");

// =====================================
// 3. Event Listeners
// =====================================

// Start quiz
startBtn.addEventListener("click", () => {
  document.getElementById("start-screen").style.display = "none";
  quizContainer.style.display = "block";
  displayQuestion(currentQuestionIndex); // Load first question
  document.getElementById("lofi-audio").play().catch(e => console.log("Audio blocked:", e));
});

// Handle "Next" button click
nextBtn.addEventListener("click", () => {
  const saved = saveUserAnswer(currentQuestionIndex); // Validate and save answer

  if (!saved) {
    toggleValidationMessage(true); // Show validation if nothing selected
    return;
  }
  toggleValidationMessage(false); // Hide validation if proceeding

  // Go to next question or finish quiz
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
  } else {
    scoreQuiz(userAnswers); // Final scoring function
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-message").style.display = "block";
  }
});

// Handle "Previous" button click
prevBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
  }
});

// =====================================
// 4. Core Functions
// =====================================

// Renders the current question and its options
// Renders the current question and its options
function displayQuestion(index) {
  optionsContainer.innerHTML = ""; // Clear previous options
  toggleNavButtons(false);         // Hide buttons initially
  nextBtn.disabled = true;
  prevBtn.disabled = true;

  if (index < questions.length) {
    const question = questions[index];

    typeWriterEffect(question.question, () => {
      nextBtn.disabled = false;
      if (index > 0) prevBtn.disabled = false;

      let inputType;
      if (question.type === "multiple") {
        inputType = "checkbox";
      } else {
        inputType = "radio";
      }

      question.options.forEach((option, i) => {
        createOptionElement(option, index, i, inputType, question, optionsContainer);
      });

      const delay = question.options.length * 100 + 400;

      setTimeout(() => {
        toggleNavButtons(true);
        updateNavigationButtons(index, questions.length);
      }, delay);
    });
  }
}




// Builds a single input + label for an option
function createOptionElement(option, index, i, type, question, optionsContainer) {
  const inputId = `q${index}_opt${i}`;
  const inputName = `question_${index}`;

  // Hidden input
  const input = document.createElement("input");
  input.type = type;
  input.name = inputName;
  input.id = inputId;
  input.value = option;
  input.hidden = true;

  // Styled label as button
  const label = document.createElement("label");
  label.setAttribute("for", inputId);
  label.classList.add("option-btn");
  label.textContent = option;

  label.style.setProperty('--animation-order', i + 1); // set animation delay order

  // Add validation for checkboxes
  if (type === "checkbox") {
    handleCheckboxLimit(input, question, index, optionsContainer);
  }

  optionsContainer.appendChild(input);
  optionsContainer.appendChild(label);
}

// Stores selected input(s) into userAnswers array
function saveUserAnswer(index) {
  const question = questions[index];
  const inputName = `question_${index}`;
  const selectedInputs = document.querySelectorAll(`input[name="${inputName}"]:checked`);

  if (selectedInputs.length === 0) {
    return false; // No answer selected
  }

  if (question.type === "multiple") {
    // Save multiple selected values as an array
    userAnswers[index] = Array.from(selectedInputs).map(input => input.value);
  } else {
    // Save single selected value
    userAnswers[index] = selectedInputs[0].value;
  }

  return true;
}

// Limits checkbox selections based on question rules
function handleCheckboxLimit(input, question, index, optionsContainer) {
  input.addEventListener("change", () => {
    const selector = `input[name="question_${index}"]:checked`;
    const selected = optionsContainer.querySelectorAll(selector);

    toggleValidationMessage("choosethree", false);
    toggleValidationMessage("topthree", false);

    // For ranked: must pick exactly 3
    if (question.typeDetail === "ranked") {
      if (selected.length > question.max) {
        input.checked = false;
        toggleValidationMessage("topthree", true);
      }
    }
    // For max: limit selection count
    else if (question.typeDetail === "max") {
      if (selected.length > question.max) {
        input.checked = false;
        toggleValidationMessage("choosethree", true);
      }
    }
  });
}

// Shows/hides the Next/Previous buttons appropriately
function updateNavigationButtons(index, totalQuestions) {
  if (index === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  const isLastQuestion = index === totalQuestions - 1; // Check if this is the final question

  if (isLastQuestion) {
    nextBtn.textContent = "Finish"; // Change button label to "Finish" on last question
  } else {
    nextBtn.textContent = "Next"; // Otherwise keep it as "Next"
  }

}

function toggleNavButtons(show) {
  if (show) {
    nextBtn.classList.add('visible');
    nextBtn.classList.remove('hidden');
    if (currentQuestionIndex > 0) {
      prevBtn.classList.add('visible');
      prevBtn.classList.remove('hidden');
    }
  } else {
    nextBtn.classList.remove('visible');
    nextBtn.classList.add('hidden');
    prevBtn.classList.remove('visible');
    prevBtn.classList.add('hidden');
  }
}



// Shows or hides a validation message if user didn't select an answer
function toggleValidationMessage(visible) {
  const validation = document.getElementById("validation-message");
  if (visible) {
    validation.classList.add("visible");
  } else {
    validation.classList.remove("visible");
  }
}

// Animates the question text letter by letter
function typeWriterEffect(text, callback) {
  let i = 0;
  questionText.textContent = "";
  questionText.classList.add("typing");

  const typingInterval = setInterval(() => {
    if (i < text.length) {
      questionText.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
      questionText.classList.remove("typing");
      if (callback) callback(); // Run next step when animation done
    }
  }, 30);
}

// Placeholder to calculate results based on userAnswers
function scoreQuiz(answers) {
  // To be implemented later
}

// shows the results of the user booksona!!!
function showResults() {

}


