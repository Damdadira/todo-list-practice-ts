import { MdDone, MdDelete } from 'react-icons/md';
import { TodoItemBlock, CheckCircle, Text, Remove } from './styles.css';

type CompProps = {
  done: boolean;
  text: string;
}

export default function TodoItem({done, text}: CompProps){
  return (
    <div className={TodoItemBlock}>
      <div className={CheckCircle({done})}>{done && <MdDone/>}</div>
      <div className={Text({done})}>{text}</div>
      <div className={Remove}><MdDelete/></div>
    </div>
  )
}

