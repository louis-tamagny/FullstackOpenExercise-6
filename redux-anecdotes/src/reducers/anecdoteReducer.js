import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addAnecdote(state, action) {
      return state.concat(action.payload)
    },
    vote(state, action) {      
      state.find(a => a.id === action.payload).votes += 1
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { addAnecdote, vote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.addAnecdote(content)
    dispatch(addAnecdote(anecdote))
  }
}
export default anecdoteSlice.reducer