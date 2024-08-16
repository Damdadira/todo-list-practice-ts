import { TodoHeadBlock, h1, day, tasksLeft } from './styles.css';
import { useTodoState } from './TodoContext';

export default function TodoHead(){
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month:'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });
  
  return(
    <div className={TodoHeadBlock}>
      <h1 className={h1}>{dateString}</h1>
      <div className={day}>{dayName}</div>
      <div className={tasksLeft}>할 일 {undoneTasks.length}개 남음</div>
    </div>
  )
}