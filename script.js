document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".question");

    questions.forEach(question => {
        const fieldset = question.querySelector("fieldset");
        const feedback = question.querySelector(".feedback");

        fieldset.addEventListener("change", () => {
            const selectedOption = fieldset.querySelector("input:checked");

            if (selectedOption) {
                const answer = selectedOption.value;
                const correctAnswer = getCorrectAnswer(question);

                if (answer === correctAnswer) {
                    feedback.textContent = "Correct!";
                    feedback.style.color = "green";
                } else {
                    feedback.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
                    feedback.style.color = "red";
                }
            }
        });
    });

    function getCorrectAnswer(questionElement) {
        const questionNumber = questionElement.querySelector("p").textContent.split(" ")[1]; 
        const questionValue = parseInt(questionNumber) - 1; 
        const answers = ["2019", "C/C++", "14"]; 

        return answers[questionValue];
    }
});