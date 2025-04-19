const questions = [
  {
    question: "1. How do you organize your bookshelf?",
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

// DOM Elements
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const startBtn = document.getElementById("start-button");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const quizContainer = document.querySelector("main");

let currentQuestionIndex = 0;
const userAnswers = new Array(questions.length).fill(null);

// Start Quiz
startBtn.addEventListener("click", () => {
  document.getElementById("start-screen").style.display = "none";
  quizContainer.style.display = "block";
  displayQuestion(currentQuestionIndex);
  document.getElementById("lofi-audio").play().catch(e => console.log("Audio blocked:", e));
});

// Typewriter Effect
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
      if (callback) callback();
    }
  }, 30);
}

function scoreQuiz(answers) {
  // Placeholder for now
  // Will process 'answers' to return a result
}

function displayQuestion(index) {
  optionsContainer.innerHTML = "";

  // diable nav btn until type effect finishes
  nextBtn.disabled = true;
  nextBtn.disabled = true;

  if (index < questions.length) {
    const question = questions[index];

    typeWriterEffect(question.question, () => {
      nextBtn.disabled = false;
      if (index > 0) {
        prevBtn.disabled = false;
      }

      question.options.forEach((option, i) => {
        // Determine input type
        let inputType;
        if (question.type === "multiple") {
          inputType = "checkbox";
        } else {
          inputType = "radio";
        }

        const inputId = "q" + index + "_opt" + i;

        // Create input
        const input = document.createElement("input");
        input.type = inputType;
        input.name = "question_" + index;
        input.id = inputId;
        input.value = option;
        input.hidden = true;

        // Create label styled like a button
        const label = document.createElement("label");
        label.setAttribute("for", inputId);
        label.classList.add("option-btn");
        label.textContent = option;

        // For checkbox questions with a max limit
        if (inputType === "checkbox") {
          input.addEventListener("change", () => {
            const selector = 'input[name="question_' + index + '"]:checked';
            const selected = optionsContainer.querySelectorAll(selector);

            if (question.max && selected.length > question.max) {
              input.checked = false;
              alert("You can only select up to " + question.max + " options for this question.");
            }
          });
        }

        optionsContainer.appendChild(input);
        optionsContainer.appendChild(label);
      });
    });
  }

  // Show or hide the Previous button
  if (index === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  // Change the text of the Next button
  if (index === questions.length - 1) {
    nextBtn.textContent = "Finish";
  } else {
    nextBtn.textContent = "Next";
  }

}

// Navigation
nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
  } else {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-message").style.display = "block";
  }
});

prevBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
  }
});
