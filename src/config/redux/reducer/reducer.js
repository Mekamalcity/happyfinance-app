const initialState = {
    popup: 'false',
    isLogin: false,
    Loading: false,
    user: {},
    transactions: []
  }
  
  const reducer = (state = initialState, action) => {
    if (action.type === 'CHANGE_POPUP') {
      return {
        ...state,
        popup: action.value
      }
    }
    if (action.type === "CHANGE_LOGIN") {
      return {
        ...state,
        isLogin: action.value
      }
    }
    if (action.type === 'CHANGE_USER') {
      return {
        ...state,
        user: action.value
      }
    }
    if (action.type === 'CHANGE_LOADING') {
      return {
        ...state,
        Loading: action.value
      }
    }
    if (action.type === 'DELETE_TRANSACTION') {
    return {
      ...state,
      transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    }
    if (action.type === 'ADD_TRANSACTION') {
    return {
      ...state,
      transactions: [action.payload, ...state.transactions]
      }
    }
    return state
  }

  export default reducer;