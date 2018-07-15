import { Elements } from '../views/ElementsView';

export default class Operations {
  constructor() {
    this.operations = [];
    this.localStorage = JSON.parse(localStorage.getItem('operations'));
  }

  getOperations() {
    if (this.localStorage !== null)
      this.operations = this.localStorage;
    Elements.operations.forEach(operation => {
      operation.checked = false;
    });
    return this.operations;
  }

  updateOperations() {
    this.operations = [];
    Elements.operations.forEach(operation => {
      if (operation.checked)
        this.operations.push(operation.value);
    });
    if (this.operations.length !== 0)
      localStorage.setItem('operations', JSON.stringify(this.operations));
  }
}