import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../services/anecdote'
import { useContextDispatch } from '../NotificationContext'

const AnecdoteForm = () => {

  const queryClient = useQueryClient()
  const notificationDispatch = useContextDispatch()

  const createMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: ({ content }) => {
      notificationDispatch({ type: 'SET', payload: `anecdote '${content}' created` })
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    },
    retry: 1
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    createMutation.mutate({ content, votes: 0 })
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
