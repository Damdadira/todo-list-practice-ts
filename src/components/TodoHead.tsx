import { TodoHeadBlock, h1, day, tasksLeft } from './styles.css';

export default function TodoHead(){
  return(
    <div className={TodoHeadBlock}>
      <h1 className={h1}>2024년 8월 16일</h1>
      <div className={day}>금요일</div>
      <div className={tasksLeft}>할 일 2개 남음</div>
    </div>
  )
}