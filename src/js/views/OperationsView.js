import { Elements } from './ElementsView';

export const OperationsView = {
  updateSelection: function(operations) {
    operations.forEach(operation => {
      Elements.operations[parseInt(operation)].checked = true;
    });
  }
}