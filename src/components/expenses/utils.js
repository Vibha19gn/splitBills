import * as storageUtils from "../../common/storage";

export const manageExpense = (expense, friends, userName, action) => {
  const allExpenses = storageUtils.getStorageByKey(storageUtils.EXPENSES);
  const getExpensesByLoggedInUser = allExpenses[userName];
  if(action === "Add") {
    const payload = {
      ...expense,
      friends: friends
    };
    payload["id"] = storageUtils.generateID();
    getExpensesByLoggedInUser.push(payload);
    allExpenses[userName] = getExpensesByLoggedInUser;
    storageUtils.setStorageByKey(storageUtils.EXPENSES,  allExpenses);
    return allExpenses[userName];
  } else if(action === "Edit") {
    const payload = {
      friends: friends,
      ...expense
    };
    const index = getExpensesByLoggedInUser.findIndex((expenseItem) => {
      return expenseItem.id === expense.id;
    });
    const expenseToUpdate = {...getExpensesByLoggedInUser[index], ...payload};
    allExpenses[userName][index] = expenseToUpdate;
    storageUtils.setStorageByKey(storageUtils.EXPENSES, allExpenses);
    return allExpenses[userName];
  }
  return null
}

export const deleteExpense = (expenseId, userName) => {
  const allExpenses = storageUtils.getStorageByKey(storageUtils.EXPENSES);
  const list = allExpenses[userName].filter((expenseItem) => {
    return expenseItem.id !== expenseId;
  });
  allExpenses[userName] = list;
  storageUtils.setStorageByKey(storageUtils.EXPENSES, allExpenses);
  return list;
}
