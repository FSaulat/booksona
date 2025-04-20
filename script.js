// =====================================
// 1. Quiz Data
// =====================================
const questions = [
  {
    question: "1. How do you organize your bookshelf?",
    type: "single",
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
    type: "single",
    options: [
      "Love stories – Romance, romcoms, heartbreaks",
      "Fantasy escape – Magical worlds, mythology, romantasy",
      "Poetic sadness – Literary fiction, lyrical prose, emotion-heavy",
      "Cozy mystery – Whodunits, thrillers, dark academia",
      "Epic drama – Rebellions, kingdoms, dystopia, sci-fi",
      "Hidden secrets – Contemporary, magical realism, mystery",
      "Historical vibes – War novels, vintage drama, period fiction"
    ]
  },
  {
    question: "3. What genre do you reach for when you want to think?",
    type: "single",
    options: [
      "Literary Fiction",
      "Memoir",
      "Historical Fiction",
      "Contemporary Fiction",
      "I avoid heavy reads — give me escapism"
    ]
  },
  {
    question: "4. What are some things you need in a book?<br>Rank your top 3 (1 = must-have, 3 = still appreciated)",
    type: "multiple",
    typeDetail: "ranked",
    max: 3,
    options: [
      "Political intrigue or social commentary",
      "A swoon-worthy romance",
      "Complex character dynamics (found family, enemies-to-lovers, etc.)",
      "Beautiful, lyrical writing",
      "Deep worldbuilding and lore"
    ]
  },
  {
    question: "5. What bothers you most in a book? Rank your top 3 (1 = most annoying, 3 = still annoying but tolerable)",
    type: "multiple",
    typeDetail: "ranked",
    max: 3,
    options: [
      "Flat or one-dimensional characters",
      "Predictable plots",
      "Overly flowery writing",
      "Nothing happening for 200 pages",
      "Lack of emotional depth"
    ]
  },
  {
    question: "6. What is your ideal place to read?",
    type: "single",
    options: [
      "A cozy cottage with a blanket and tea",
      "A sleek café in the city",
      "A treehouse in the woods",
      "A hidden corner of an old library",
      "My room — hoodie on, lights off, leave me alone"
    ]
  },
  {
    question: "7. What is the most realistic place you actually read? (Choose up to 3)",
    type: "multiple",
    typeDetail: "max",
    max: 3,
    options: [
      "In class because I don’t pay attention",
      "In bed because I’m lazy",
      "Between tasks because I have brain rot and need breaks",
      "During a set time — I carve out structured reading sessions",
      "In my car during a mental health moment",
      "I open the book, then scroll for an hour",
      "Audiobooks while I pretend I’m productive"
    ]
  },
  {
    question: "8. Your favorite kind of character is...",
    type: "single",
    options: [
      "The misunderstood villain",
      "The witty, loyal sidekick",
      "The morally gray anti-hero",
      "The hopeless romantic",
      "The soft-spoken genius",
      "The golden retriever"
    ]
  },
  {
    question: "9. When you finish a great book, what do you do?",
    type: "single",
    options: [
      "Reread my favorite parts immediately",
      "Journal or write a review about it",
      "Cry",
      "Yell at my friends to read it",
      "Stare into space, emotionally devastated"
    ]
  },
  {
    question: "10. Choose your dream book setting:",
    type: "single",
    options: [
      "A lush enchanted forest",
      "A crumbling kingdom on the edge of war",
      "A sleepy town with dark secrets",
      "A gritty futuristic dystopia",
      "A traveling circus or magical theater troupe",
      "A large fantasy mansion with a huge library"
    ]
  },
  {
    question: "11. What’s your favorite book trope? (Pick up to 3)",
    type: "multiple",
    typeDetail: "max",
    max: 3,
    options: [
      "Enemies to lovers",
      "Found family",
      "Grumpy x sunshine",
      "Slow burn romance",
      "The chosen one",
      "Secret royalty",
      "Academic rivals",
      "There was only one bed",
      "Messy morally gray characters",
      "Fake dating that turns real"
    ]
  },
  {
    question: "12. What book trope gives you the ick? (Pick up to 3)",
    type: "multiple",
    typeDetail: "max",
    max: 3,
    options: [
      "Insta-love",
      "Love triangles that go nowhere",
      "Not like other girls",
      "Miscommunication as the whole plot",
      "The chosen one but they’re bland",
      "Manic pixie dream girl",
      "She let out a breath she didn’t know she was holding",
      "Token diversity with no substance",
      "Pregnancy trope",
      "Age gap"
    ]
  },
  {
    question: "13. What’s the pettiest reason you’ve DNF’d a book?",
    type: "single",
    options: [
      "The font was ugly",
      "A character had my ex’s name",
      "The vibes were just… off",
      "Too many italics. Calm down.",
      "Cringe line on page two",
      "It tried too hard to be deep",
      "Insta-love. I noped out.",
      "The book smelled weird",
      "I just got bored and forgot about it",
      "I don’t DNF. I suffer through"
    ]
  },
  {
    question: "14. If you know a book is heartbreaking, how do you go into it?",
    type: "single",
    options: [
      "I emotionally detach — this is just fiction",
      "I brace myself, knowing I’ll be devastated",
      "I romanticize the heartbreak — I want to feel something",
      "I joke my way through the pain",
      "I put it off for months, then read it in one sitting at 3 a.m.",
      "I spoil myself just a little to prepare",
      "I suffer in silence and spiral for days",
      "I treat it like emotional masochism and I love it",
      "I act surprised even though I knew what I signed up for",
      "I yell at the characters and throw the book"
    ]
  },
  {
    question: "15. When you read a book, do you look for fanart while reading or wait until the end?",
    type: "single",
    options: [
      "While reading — I need visuals as I go",
      "Only after finishing — spoilers scare me",
      "Right after dramatic scenes — I need to see someone else suffering too",
      "I deep dive mid-book and end up on Pinterest for hours",
      "I don’t — I want my own vision of the characters",
      "I peek early just to check the vibe",
      "I binge fanart before reading — it’s part of the ritual"
    ]
  },
  {
    question: "16. When you find a word or name you don’t know how to pronounce, what do you do?",
    type: "single",
    options: [
      "I try to sound it out",
      "I Google it or look for a pronunciation guide",
      "I give it a nickname and move on",
      "I read it confidently in my head and pretend I know",
      "I skip it every time like my brain said no",
      "I wait for the audiobook to save me",
      "I re-spell it into something I can pronounce",
      "I just vibe through the confusion"
    ]
  },
  {
    question: "17. Do you choose books based on the cover?",
    type: "single",
    options: [
      "Yes. If the cover is pretty, I’m already 40% in.",
      "A nice cover pulls me in, but I still read the blurb or reviews.",
      "I don’t care — some of my faves have terrible covers.",
      "I look for a vibe. If the aesthetic is right, I’m interested.",
      "I don’t even look at the cover. I go off vibes, recs, or chaos."
    ]
  },
  {
    question: "18. Do you prefer going into a book blind or knowing what you’re getting into?",
    type: "single",
    options: [
      "I go in completely blind — I love the surprise.",
      "I like to know the basic premise first.",
      "I read reviews or watch videos first, I need context.",
      "I skim spoilers. Emotional prep is survival.",
      "Depends — if it’s a trusted author or rec, I go in blind."
    ]
  },
  {
    question: "19. How do you track or log your reading (if at all)?",
    type: "single",
    options: [
      "I use Goodreads, StoryGraph, or another app — stats matter",
      "I log books in a journal or reading notebook",
      "I make aesthetic posts or lists (Instagram, Notion, Pinterest boards)",
      "I mentally keep track — I know what I’ve read",
      "I don’t track anything — I’m here for the vibes only"
    ]
  },
  {
    question: "20. Do you reread books?",
    type: "single",
    options: [
      "Yes — I have comfort books I return to often",
      "Only if I really loved it the first time",
      "I mean to... but my TBR is too long",
      "Never. Once I know the ending, I’m done",
      "I reread scenes, not whole books"
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


