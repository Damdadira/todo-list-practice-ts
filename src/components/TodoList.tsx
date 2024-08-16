import { TodoListBlock } from './styles.css';
import TodoItem from './TodoItem';

export default function TodoList(){
  return (
    <div className={TodoListBlock}>
      <TodoItem text='프로젝트 생성하기' done={true}></TodoItem>
      <TodoItem text='컴포넌트 스타일링하기' done={true}></TodoItem>
      <TodoItem text='Context 만들기' done={false}></TodoItem>
      <TodoItem text='기능 구현하기' done={false}></TodoItem>
    </div>
  )
}