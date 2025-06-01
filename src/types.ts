export interface answerTypes {
  value: string;
  isCorrect: boolean;
}

export interface QuestionType {
  qustionTitle: string;
  answers: answerTypes[];
}
