import { Elements } from '../views/ElementsView';
import { OperationsView } from '../views/OperationsView';

export function controlOperations(operations) {

  OperationsView.updateSelection(operations.getOperations());
  
  Elements.operations.forEach(operation => {
    operation.addEventListener('click', () => { operations.updateOperations() });
  });

}