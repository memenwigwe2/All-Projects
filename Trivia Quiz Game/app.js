const apiUrl = 'https://opentdb.com/api.php?amount=10&type=multiple';   

async function fetchTriviaQuestions() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching trivia questions:', error);
        return [];
    }
}

async function chatWithGPT(message) {
    // Replace this function with your actual ChatGPT interaction logic
    // Mock GPT response for testing
    return "That's an interesting question!";
}

async function startTriviaGame() {
    const questions = await fetchTriviaQuestions();
    const quizContainer = document.getElementById('quiz-container');

    for (let index = 0; index < questions.length; index++) {
        const question = questions[index];

        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            <ul id="options-${index}">
                ${question.incorrect_answers.map((option, i) => `<li data-index="${i}">${option}</li>`).join('')}
                <li data-index="${question.incorrect_answers.length}">${question.correct_answer}</li>
            </ul>
            <button class="submit-button" onclick="submitAnswer(${index}, '${question.correct_answer}')">Submit Answer</button>
        `;

        quizContainer.appendChild(questionElement);

        const optionsContainer = document.getElementById(`options-${index}`);
        optionsContainer.addEventListener('click', (event) => handleOptionClick(event, optionsContainer, question.correct_answer));
    }
}

function handleOptionClick(event, optionsContainer, correctAnswer) {
    const clickedElement = event.target;

    // Check if the clicked element is an <li> inside the options container
    if (clickedElement.tagName === 'LI') {
        // Remove the 'selected' class from all options in the container
        Array.from(optionsContainer.children).forEach(option => {
            option.classList.remove('selected');
        });

        // Add the 'selected' class to the clicked option
        clickedElement.classList.add('selected');
    }
}

function submitAnswer(questionIndex, correctAnswer) {
    const selectedOption = document.querySelector(`#options-${questionIndex} .selected`);

    if (selectedOption) {
        const userAnswer = selectedOption.innerText;
        const isCorrect = checkAnswer(userAnswer, correctAnswer);

        // Apply styling based on correctness
        selectedOption.classList.remove('correct', 'incorrect');
        selectedOption.classList.add(isCorrect ? 'correct' : 'incorrect');

        // Disable options after submission
        disableOptions(questionIndex);
    } else {
        console.log('Please select an answer before submitting.');
    }
}

function checkAnswer(selectedAnswer, correctAnswer) {
    const isCorrect = selectedAnswer === correctAnswer;
    if (isCorrect) {
        console.log('Correct!');
    } else {
        console.log('Incorrect. The correct answer is:', correctAnswer);
    }
    return isCorrect;
}

function disableOptions(questionIndex) {
    // Disable options
    const optionsContainer = document.getElementById(`options-${questionIndex}`);
    Array.from(optionsContainer.children).forEach(option => {
        option.classList.add('inaccessible');
    });
}

// Example usage
startTriviaGame();
