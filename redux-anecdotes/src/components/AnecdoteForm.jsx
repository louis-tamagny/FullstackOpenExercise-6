import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { addNotif } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleNewAnecdote = async (event) => {
    event.preventDefault()
    const newAnecdote = await anecdoteService.addAnecdote(event.target.anecdote.value)
    dispatch(createAnecdote(newAnecdote))
    dispatch(addNotif(`you created '${ newAnecdote.content }'`))
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