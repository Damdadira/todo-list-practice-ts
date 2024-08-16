import './App.css'
import TodoTempalte from './components/TodoTemplate'
import TodoHead from './components/TodoHead'
import TodoList from './components/TodoList'
import TodoCreate from './components/TodoCreate'
import { TodoProvider } from './components/TodoContext'

function App() {

  return (
    <TodoProvider>
      <TodoTempalte>
        <TodoHead />
        <TodoList />
        <TodoCreate/>
      </TodoTempalte>
    </TodoProvider>
  )
}

export default App
