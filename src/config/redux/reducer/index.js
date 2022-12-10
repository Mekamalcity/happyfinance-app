const initialState = {
    popup: 'false',
    isLogin: false,
    Loading: false,
    user: null,
    management: []
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
    if (action.type === 'SET_MANAGEMENT') {
      return {
        ...state,
        management: action.value
      }
    }
    return state
  }

  export default reducer;