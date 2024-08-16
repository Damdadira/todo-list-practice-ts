import './App.css'
import TodoTempalte from './components/TodoTemplate'
import TodoHead from './components/TodoHead'
import TodoList from './components/TodoList'
import TodoCreate from './components/TodoCreate'

function App() {

  return (
    <>
      <TodoTempalte>
        <TodoHead />
        <TodoList />
        <TodoCreate/>
      </TodoTempalte>
    </>
  )
}

export default App
