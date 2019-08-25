export const manageExpense = (state = [], action) => {
  switch (action.type) {
    case 'MANAGE_EXPENSE':
      return action.data;
    default:
      return state;
  }
};

export default manageExpense;
