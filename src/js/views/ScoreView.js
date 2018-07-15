import { Elements } from './ElementsView';

export function displayScore(correct, incorrect) {
  Elements.score.correct.innerHTML = correct;
  Elements.score.incorrect.innerHTML = incorrect;
}