export const authApi = 'http://localhost:5020/Account'
export const categoryApi = 'http://localhost:5021/api/CategoryModels'
export const expenseApi = 'http://localhost:5022/api/Expenses'
export const backendUrl = {
  authService: {
    authenticate: `${authApi}/Login/`,
    register: `${authApi}/Register`,
  },
  categoryService: {
    getCategories: `${categoryApi}/`,
    saveCategory: `${categoryApi}/`,
  },
  expenseService: {
    getExpenses: `${expenseApi}/`,
    saveExpense: `${expenseApi}`,
  },
}