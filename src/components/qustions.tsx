import { useState } from "react";
import { Question } from "../components";
import { qustions } from "../utils/staticData";
import type { answerTypes } from "../types";

const Quastions = () => {
  const [currentQustionIndex, setCurrentQustionIndex] = useState(0);
  const [result, setResult] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<answerTypes | null>(
    null
  );

  const currentQustion = qustions[currentQustionIndex];

  const handleNext = () => {
    if (selectedAnswer?.isCorrect) {
      setResult((prev) => prev + 1);
    }
    setSelectedAnswer(null);
    setCurrentQustionIndex((prev) => prev + 1);
  };

  return (
    <div className="p-4">
      {currentQustionIndex < qustions.length ? (
        <>
          <Question
            qustionTitle={currentQustion.qustionTitle}
            answers={currentQustion.answers}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
          />
          <div className="h-[100px]">
            <button
              className="w-30 h-10 bg-blue-700 text-white rounded-md my-5 px-4"
              disabled={!selectedAnswer}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="text-2xl font-semibold mt-10">
          Your result is: {result} / {qustions.length}{" "}
          {result > qustions.length / 2 ? "Excellent!" : "Keep practicing!"}
        </div>
      )}
    </div>
  );
};

export default Quastions;
