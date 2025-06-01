import React from "react";
import type { QuestionType, answerTypes } from "../types";

interface QuestionProps extends QuestionType {
  selectedAnswer: answerTypes | null;
  setSelectedAnswer: (answer: answerTypes) => void;
}

const Question: React.FC<QuestionProps> = ({
  qustionTitle,
  answers,
  selectedAnswer,
  setSelectedAnswer,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {qustionTitle}
      </h2>

      {answers.length <= 0 ? (
        <h2>No answers available</h2>
      ) : (
        <form className="flex flex-col gap-2">
          {answers.map((answer: answerTypes) => (
            <label
              key={answer.value}
              className={`flex items-center gap-2 w-[300px] p-2 rounded cursor-pointer 
                ${
                  selectedAnswer?.value === answer.value
                    ? "bg-blue-200"
                    : "bg-gray-100"
                } 
                hover:bg-gray-200`}
            >
              <input
                type="radio"
                name="answer"
                value={answer.value}
                checked={selectedAnswer?.value === answer.value}
                onChange={() => setSelectedAnswer(answer)}
                className="accent-blue-600"
              />
              <span className="text-base text-gray-900">{answer.value}</span>
            </label>
          ))}
        </form>
      )}
    </div>
  );
};

export default Question;
