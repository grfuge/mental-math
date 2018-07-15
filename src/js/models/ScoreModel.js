import { displayScore } from '../views/ScoreView';

export default class Score {
  constructor(correct, incorrect) {
    this.correct = correct;
    this.incorrect = incorrect;
  }

  resetScore() {
    this.correct = 0;
    this.incorrect = 0;
    this.saveScore();
  }

  loadScore() {
    if (localStorage.getItem('score') !== null) {
      const score = JSON.parse(localStorage.getItem('score'));
      this.correct = score.correct;
      this.incorrect = score.incorrect;
    }
    else {
      this.correct = 0;
      this.incorrect = 0;
    }
    displayScore(this.correct, this.incorrect);
  }

  saveScore() {
    localStorage.setItem('score', JSON.stringify(this));
    displayScore(this.correct, this.incorrect);
  }
}