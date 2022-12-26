const quizData = [
    {
        question: "Which of the following is the world tallest building?",
        a: "China great wall",
        b: "Burj khalifa",
        c: "Twin towers",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Who is the greatest of mankinds?",
        a: "Muhammad (S.A.W)",
        b: "Leonardo Da Vinci",
        c: "Kiyosaki",
        d: "Einstein",
        correct: "a",
    },
    {
        question: "The first firstlady of Nigeria is?",
        a: "Mrs Kuti",
        b: "Mrs Buhari",
        c: "Black Widow",
        d: "None of the above",
        correct: "d",
    },
    {
        question: "The 2014 world cup winner is?",
        a: "Germany",
        b: "Ukraine",
        c: "Nigeria",
        d: "China",
        correct: "a",
    },
];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>`;
        }
    }
});