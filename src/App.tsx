import './App.css'
import TodoTempalte from './components/TodoTemplate'
import TodoHead from './components/TodoHead'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
      <TodoTempalte>
        <TodoHead />
        <TodoList />
      </TodoTempalte>
    </>
  )
}

export default App
