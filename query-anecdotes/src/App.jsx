import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query'
import { getAnecdotes, voteAnecdote } from './services/anecdote'

const App = () => {

  const queryClient = useQueryClient()

  const voteMutation = useMutation({
    mutationFn: voteAnecdote,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
  })

  const handleVote = (anecdote) => {
    voteMutation.mutate(anecdote)        
  } 

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: 1
  })

  if(result.isPending) {
    return <div>waiting anecdotes server...</div>
  }

  if(result.isError) {
    return <div>anecdote service not available due to problems in server</div>
  }
  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
