import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import {
  CircleButton,
  InsertFormPositioner,
  InsertForm,
  Input,
} from './styles.css';
import { useTodoDispatch, useTodoNextId } from './TodoContext';

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault(); //새로고침 방지

    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>
      {open && (
        <div className={InsertFormPositioner}>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="할 일을 입력 후, Enter를 누르세요."
              onChange={onChange}
              value={value}
            ></Input>
          </InsertForm>
        </div>
      )}
      <button className={CircleButton({ open })} onClick={onToggle}>
        <MdAdd />
      </button>
    </>
  );
}

export default React.memo(TodoCreate);
