import { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { CircleButton, InsertFormPositioner, InsertForm, Input } from './styles.css';

export default function TodoCreate(){
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  return(
    <>
      {open && (
        <div className={InsertFormPositioner}>
          <InsertForm>
            <Input autoFocus placeholder='할 일을 입력 후, Enter를 누르세요.'></Input>
          </InsertForm>
        </div>
      )}
      <button className={CircleButton({open})} onClick={onToggle}>
        <MdAdd/>
      </button>
    </>
  )
}