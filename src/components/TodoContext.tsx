import React, { createContext, useReducer, useContext, useRef } from 'react';

type todoProps = {
  id: number;
  text: string;
  done: boolean;
}

const initialTodos: todoProps[] = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false
  }
];

export type State = { id: number, done: boolean}[];
export type Action = {
  type: 'CREATE' | 'TOGGLE' | 'REMOVE';
  todo?: { id: number; done: boolean };
  id?: number;
}

function todoReducer(state: State, action: Action): State {
  switch(action.type){
    case 'CREATE':
      return state.concat(action.todo!);
    case 'TOGGLE':
      return state.map(todo => todo.id === action.id ? { ...todo, done: !todo.done }: todo);
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext<State | null>(null);
const TodoDispatchContext = createContext<React.Dispatch<Action> | null>(null);
const TodoNextIdContext = createContext<React.MutableRefObject<number> | null>(null);

export type todoProvider = {
  children: React.ReactNode;
}

export function TodoProvider({children}: todoProvider){
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState(){
  const context = useContext(TodoStateContext)
  if(!context){
    throw new Error('Cannot find TodoStateContext');
  }
  return context;
}

export function useTodoDispatch(){
  const context = useContext(TodoDispatchContext)
  if(!context){
    throw new Error('Cannot find TodoDispatchContext');
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext)
  if(!context){
    throw new Error('Cannot find TodoNextIdContext');
  }
  return context;
}