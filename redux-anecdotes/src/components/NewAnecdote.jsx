import { useDispatch } from 'react-redux'

const NewAnecdote = () => {
  const dispatch = useDispatch()
  const handleNewAnecdote = (event) => {
    event.preventDefault()
    dispatch({ type: 'NEW', payload: { anecdote: event.target.anecdote.value }})
  }
  return (
    <form onSubmit={handleNewAnecdote}>
        <input name="anecdote"/><br/>
        <button type="submit">create</button>
    </form>
  )
}

export default NewAnecdote