import { useSelector, useDispatch } from "react-redux"

const Anecdotes = () => {
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch({ type: 'VOTE', payload: {id: id}})
  }

  const anecdotes = useSelector(state => state)
  anecdotes.sort((a, b) => b.votes - a.votes)
  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>    
  )
}

export default Anecdotes