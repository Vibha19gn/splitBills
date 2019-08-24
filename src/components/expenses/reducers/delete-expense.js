export const deleteExpense = (state = null, action) => {
  switch (action.type) {
    case 'DELETE_EXPENSE':
      return action.data;
    default:
      return state;
  }
};

export default deleteExpense;
