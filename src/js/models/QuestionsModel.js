export default class Question {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }

  generateQuestion(operations, difficulty) {
    function randomArrayItem(array) {
      return array[Math.floor(Math.random()*array.length)];
    }

    let operation = randomArrayItem(operations);
    let limit;
  
    if (difficulty === 'easy') {
      if (operation == 2) limit = 12
      else if (operation == 3) limit = 6;
      else limit = 12;
    }
    else if (difficulty === 'medium') {
      if (operation == 2) limit = 24
      else if (operation == 3) limit = 12;
      else limit = 44;
    }
    else if (difficulty === 'hard') {
      if (operation == 2) limit = 64
      else if (operation == 3) limit = 24;
      else limit = 128;
    }
  
    function randomNumber(num) {
      num = Math.ceil(Math.random() * limit);
      return num;
    }

    let a;
    let b = randomNumber(b);
    if (operation == 3)
      a = randomNumber(a) * b;
    else a = randomNumber(a);

    if (operation == 0) {
      this.question = a + ' + ' + b + ' =';
      this.answer = a + b;
    }
    else if (operation == 1) {
      this.question = a + ' - ' + b + ' =';
      this.answer = a - b;
    }
    else if (operation == 2) {
      this.question = a + ` &#215; ` + b + ' =';
      this.answer = a * b;
    }
    else if (operation == 3) {
      this.question = a + ` &#247; ` + b + ' =';
      this.answer = a / b;
    }

    return this.question;
  }
}