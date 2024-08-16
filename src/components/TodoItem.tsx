import { MdDone, MdDelete } from 'react-icons/md';
import { TodoItemBlock, CheckCircle, Text, Remove } from './styles.css';
import { useTodoDispatch } from './TodoContext';

type CompProps = {
  id: number
  text: string;
  done: boolean;
}

export default function TodoItem({id, text, done}: CompProps){
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id })
  const onRemove = () => dispatch({ type: 'REMOVE', id })
  
  return (
    <div className={TodoItemBlock}>
      <div className={CheckCircle({done})} onClick={onToggle}>{done && <MdDone/>}</div>
      <div className={Text({done})}>{text}</div>
      <div className={Remove} onClick={onRemove}><MdDelete/></div>
    </div>
  )
}

