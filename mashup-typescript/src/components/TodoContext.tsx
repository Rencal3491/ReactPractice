import React, { createContext, useContext, useReducer, useRef, Dispatch } from 'react';

// 타입 정의
interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type TodoState = Todo[];

type TodoAction =
  | { type: 'CREATE'; todo: Todo }
  | { type: 'TOGGLE'; id: number }
  | { type: 'REMOVE'; id: number };

type TodoDispatch = Dispatch<TodoAction>;

const TodoStateContext = createContext<TodoState | null>(null);
const TodoDispatchContext = createContext<TodoDispatch | null>(null);
const TodoNextIdContext = createContext<React.MutableRefObject<number> | null>(null);

// reducer 함수
function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error('Unhandled action');
  }
}

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, []);
  const nextId = useRef(1);

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

// 커스텀 hooks
export function useTodoState() {
  const state = useContext(TodoStateContext);
  if (!state) throw new Error('Cannot find TodoProvider');
  return state;
}

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error('Cannot find TodoProvider');
  return dispatch;
}

export function useTodoNextId() {
  const nextId = useContext(TodoNextIdContext);
  if (!nextId) throw new Error('Cannot find TodoProvider');
  return nextId;
}