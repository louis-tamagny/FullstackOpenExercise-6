import AnecdoteForm from './components/AnecdoteForm'
import Anecdotes from './components/Anecdotes'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdotes />      
      <AnecdoteForm />      
    </div>
  )
}

export default App