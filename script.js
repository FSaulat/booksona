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
      "Books that make me believe in love again (romance, romcoms, messy heartbreaks)",
      "Magical worlds that let me forget reality (fantasy, romantasy, mythology)",
      "Slow, sad, and beautifully written (literary fiction, poetry, lyrical prose)",
      "Murder mystery but I'm cozy about it (whodunits, thrillers, dark academia)",
      "Rebellions, kingdoms, and emotional damage (epic fantasy, dystopia, sci-fi)",
      "Quiet towns hiding secrets (contemporary fiction, mystery, magical realism)",
      "Historical settings I can mentally escape into (historical fiction, war novels, vintage drama)"
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

function displayQuestion(index) {
  optionsContainer.innerHTML = "";

  if (index < questions.length) {
    typeWriterEffect(questions[index].question, () => {
      questions[index].options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option-btn");
        optionsContainer.appendChild(btn);
        void btn.offsetWidth;
      });
    });
  }

  prevBtn.style.display = index === 0 ? "none" : "block";
  nextBtn.textContent = index === questions.length - 1 ? "Finish" : "Next";
}

// Navigation
nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
  } else {
    quizContainer.style.display = "none";

    const message = document.createElement("h2");
    message.textContent = "Quiz Completed";
    message.style.fontFamily = "'IBM Plex Mono', monospace"; // Can remove if you'd rather default
    message.style.textAlign = "center";
    message.style.margin = "100px auto";
    message.style.fontSize = "2rem";
    message.style.color = "#0004ff";

    const oldMessage = document.querySelector(".quiz-message");
    if (oldMessage) oldMessage.remove();

    message.classList.add("quiz-message");
    document.body.appendChild(message);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
  }
});
