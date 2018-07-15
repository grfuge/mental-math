import Operations from '../models/OperationsModel';
import Difficulty from '../models/DifficultyModel';
import Question from '../models/QuestionsModel';
import { controlOperations } from './OperationsController';
import { displayQuestion } from '../views/QuestionsView';
import { getInput } from './InputController';
import Score from '../models/ScoreModel';

(function () {

  // Get and display math operations
  const operations = new Operations();
  controlOperations(operations);

  // Get difficulty
  const difficulty = new Difficulty();
  difficulty.initDifficulty();
  difficulty.getDifficulty();

  // Generate and display question based on operations and difficulty
  let question = new Question();
  question.generateQuestion(operations.operations, difficulty.difficulty);
  displayQuestion(question.question);

  // Update question based on difficulty
  difficulty.addDifficultyEvents(question, operations.operations);

  // Get input
  let score = new Score();
  score.loadScore();
  getInput(question, operations.operations, difficulty.difficulty, score);

})();