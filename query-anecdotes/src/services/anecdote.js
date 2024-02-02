import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes/'

export const getAnecdotes = () => {
  return axios.get(baseUrl).then(response => response.data)
}

export const createAnecdote = anecdote => {
  return axios.post(baseUrl, anecdote).then(response => response.data)
}

export const voteAnecdote = anecdote => {
  return axios
    .put(baseUrl + anecdote.id, { ...anecdote, votes: anecdote.votes + 1 })
    .then(response => response.data)
}