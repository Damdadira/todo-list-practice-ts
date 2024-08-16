import { TodoListBlock } from './styles.css';
import { useTodoState } from './TodoContext';
import TodoItem from './TodoItem';

export default function TodoList(){
  const todos = useTodoState();

  return (
    <div className={TodoListBlock}>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          id={todo.id}
          text={todo.text}
          done={todo.done}>
        </TodoItem>

      ))}
    </div>
  )
}