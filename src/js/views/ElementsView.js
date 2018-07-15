export const Elements = {
  question: document.querySelector('.question'),
  answer: document.querySelector('.answer'),
  clearnBtn: document.querySelector('.clear-btn'),
  operations: [
    document.querySelector('.checkbox-addition'),
    document.querySelector('.checkbox-subtraction'),
    document.querySelector('.checkbox-multiplication'),
    document.querySelector('.checkbox-division')
  ],
  difficulty: [
    document.querySelector('.difficulty-easy'),
    document.querySelector('.difficulty-medium'),
    document.querySelector('.difficulty-hard')
  ],
  score: {
    correct: document.querySelector('.score-correct'),
    incorrect: document.querySelector('.score-incorrect')
  }
}