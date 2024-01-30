import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleNewAnecdote = (event) => {
    event.preventDefault()
    dispatch(createAnecdote(event.target.anecdote.value))
  }
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleNewAnecdote}>
          <input name="anecdote"/><br/>
          <button type="submit">create</button>
      </form>
    </div>    
  )
}

export default AnecdoteForm