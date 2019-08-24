export const manageExpense = (state = [], action) => {
  switch (action.type) {
    case 'MANAGE_EXPENSE':
      console.log("ADD_UPDATE_EXPENSE==", action.data);
      return action.data;
    default:
      return state;
  }
};

export default manageExpense;
