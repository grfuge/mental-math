import { Elements } from '../views/ElementsView';
import { displayQuestion } from '../views/QuestionsView';
import { displayDifficulty } from '../views/DifficultyView';

export default class Difficulty {
  constructor(difficulty) {
    this.difficulty = difficulty;
  }

  initDifficulty() {
    if (localStorage.getItem('difficulty') !== null) {
      this.difficulty = localStorage.getItem('difficulty');
      displayDifficulty(this.difficulty);
    }
  }

  addDifficultyEvents(question, operations) {
    document.querySelector('.difficulty').addEventListener('click', (e) => {
      let value = e.target.value;
      if (value !== this.difficulty) displayQuestion(question.generateQuestion(operations, value));
      this.getDifficulty();
    });
  }

  getDifficulty() {
    Elements.difficulty.forEach(selection => {
      if (selection.selected === true)
        this.difficulty = selection.value;
    });
    localStorage.setItem('difficulty', this.difficulty);
    return this.difficulty;
  }
}