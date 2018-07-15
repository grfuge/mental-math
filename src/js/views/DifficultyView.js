import { Elements } from './ElementsView';

export function displayDifficulty(difficulty) {
  Elements.difficulty.forEach(option => {
    if (option.value === difficulty)
      option.selected = true;
  });
}