import { Elements } from '../views/ElementsView';
import { displayQuestion } from '../views/QuestionsView';

export function getInput(question, operations, difficulty, score) {
  Elements.answer.addEventListener('keypress', (e) => {
    if (e.keyCode == 13 && Elements.answer.value.length > 0) {
      if (Elements.answer.value == question.answer) score.correct += 1;
      else score.incorrect += 1;
      score.saveScore();

      question.generateQuestion(operations, difficulty);
      displayQuestion(question.question);

      Elements.answer.value = null;
    }
  });

  Elements.clearnBtn.addEventListener('click', () => {
    score.resetScore();
  });
}