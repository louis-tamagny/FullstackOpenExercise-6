/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux"
import { vote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch()

  const handleVote = (id) => { dispatch(vote(id)) }

  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => handleVote(anecdote.id)}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return anecdotes.filter(({ content }) => content.toLowerCase().includes(filter.toLowerCase()))
  })

  anecdotes.sort((a, b) => b.votes - a.votes)
  return (
    <div>
      {anecdotes.map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} />)}
    </div>    
  )
}

export default AnecdoteList