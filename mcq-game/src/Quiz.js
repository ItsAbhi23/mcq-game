import React, { useState } from 'react';
import './Quiz.css';

const questions = [
  {
    question: 'Select one or more colors:',
    options: ['Red', 'Blue', 'Green', 'Yellow'],
    correctAnswers: ['Red', 'Blue'],
  },
  {
    question: 'Select the planets in our solar system:',
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    correctAnswers: ['Earth', 'Mars', 'Venus'],
  },
  {
    question: 'What is the capital of France?',
    options: ['London', 'Madrid', 'Paris', 'Berlin'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    correctAnswer: 'Mars',
  },
  {
    question: 'Select mammals:',
    options: ['Lion', 'Eagle', 'Snake', 'Elephant'],
    correctAnswers: ['Lion', 'Elephant'],
  },
  {
    question: 'Select programming languages:',
    options: ['Java', 'Banana', 'Python', 'C++'],
    correctAnswers: ['Java', 'Python', 'C++'],
  },
  {
    question: 'Select European countries:',
    options: ['Brazil', 'Germany', 'India', 'Spain'],
    correctAnswers: ['Germany', 'Spain'],
  },
  {
    question: 'Select red fruits:',
    options: ['Apple', 'Banana', 'Cherry', 'Grapes'],
    correctAnswers: ['Apple', 'Cherry'],
  }
,
{
    question: 'Select movie genres:',
    options: ['Action', 'Comedy', 'Science Fiction', 'Drama'],
    correctAnswers: ['Action', 'Comedy', 'Science Fiction'],
  }
,  
  // Add more questions here
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  const handleNextQuestion = () => {
    const currentQuestionData = questions[currentQuestion];
    if (currentQuestionData.hasOwnProperty('correctAnswers')) {
      // Multiple correct answers
      const correctAnswers = currentQuestionData.correctAnswers;
      const isCorrect = correctAnswers.every((answer) => selectedOptions.includes(answer));
      if (isCorrect) {
        setScore(score + 1);
      }
    } else if (currentQuestionData.hasOwnProperty('correctAnswer')) {
      // Single correct answer
      const correctAnswer = currentQuestionData.correctAnswer;
      if (selectedOptions.includes(correctAnswer)) {
        setScore(score + 1);
      }
    }
  
    setSelectedOptions([]);
    setCurrentQuestion(currentQuestion + 1);
  };
  
//   const handleNextQuestion = () => {
//     const correctAnswers = questions[currentQuestion].correctAnswers;
//     const isCorrect = correctAnswers.every((answer) => selectedOptions.includes(answer)) && correctAnswers.length === selectedOptions.length;

//     if (isCorrect) {
//       setScore(score + 1);
//     }

//     setSelectedOptions([]);
//     setCurrentQuestion(currentQuestion + 1);
//   };

  return (
    <div className="quiz-container">
        
      {currentQuestion < questions.length ? (
        <div>
            <h1>MCQ Quiz Game</h1>
          <h2>Question {currentQuestion + 1}:</h2>
          <p>{questions[currentQuestion].question}</p>
          <ol>
            {questions[currentQuestion].options.map((option) => (
              <li key={option}>
                <div onClick={() => handleOptionClick(option)}>
                  <input
                    type="checkbox"
                    id={option}
                    name={option}
                    checked={selectedOptions.includes(option)}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              </li>
            ))}
          </ol>
          {selectedOptions.length > 0 && (
            <button onClick={handleNextQuestion}>Next</button>
          )}
        </div>
      ) : (
        <div className='Score'>
          <h1>MCQ Quiz Game</h1>
          <h2>Quiz Completed</h2>
          <h2>Your Score: {score}/{questions.length}</h2>
        </div>
      )}
    </div>
  );
}

export default Quiz;
