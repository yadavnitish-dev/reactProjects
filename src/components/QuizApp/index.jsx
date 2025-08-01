import React, { useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "What is the boiling point of water?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    answer: "100°C",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    answer: "Au",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    answer: "Blue Whale",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    answer: "Diamond",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    answer: "Tokyo",
  },
];

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scoreQuestion, setScoreQuestion] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(
    new Array(questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="flex flex-col items-center h-screen bg-black text-white ">
      <h1 className="mt-30 text-8xl font-medium">Quiz App</h1>
      {!showResult ? (
        <div className="mt-20 text-2xl">
          <div className="flex gap-1">
            <span>Question {currentQuestion + 1} : </span>
            <p> {questions[currentQuestion].question}</p>
          </div>
          <div className="flex flex-col gap-5 mt-10">
            {questions[currentQuestion].options.map((optionItem) => (
              <button
                key={optionItem}
                className=" bg-indigo-600 px-3 py-1 rounded-xl"
              >
                {optionItem}
              </button>
            ))}
          </div>
          <div className=" mt-15 flex gap-8 justify-center">
            <button className="bg-indigo-600 text-3xl rounded-full px-3 py-3">
              <FcPrevious />
            </button>
            <button className="bg-indigo-600 text-3xl rounded-full px-3 py-3">
              <FcNext/>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>Quiz Completed</p>
          <div>Score : {score}</div>
          <button>Restart</button>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
