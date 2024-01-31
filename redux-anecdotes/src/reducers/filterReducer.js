const filterReducer = (state='', action) => {
  switch (action.type) {
    case 'CHANGE':
      return action.payload
  
    default:
      return state
  }
}

export const changeFilter = (value) => {
  return { type: 'CHANGE', payload: value }
}

export default filterReducer