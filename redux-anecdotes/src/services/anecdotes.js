import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const anecdotes = await axios.get(baseUrl)
  return anecdotes.data
}

const addAnecdote = async (content) => {
  const response = await axios.post(baseUrl, { content, votes: 0})
  return response.data
}

export default { getAll, addAnecdote }