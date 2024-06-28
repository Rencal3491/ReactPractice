// useReducer를 사용하여 상태관리하는 TodoProvider

import React, { createContext, useContext, useReducer, useRef } from 'react';
const initialTodo = [
    {
        id:1,
        text:'기깔나게 숨쉬기',
        done:true
    },
    {
        id:2,
        text:'작살나게 밥먹기',
        done:true
    },
    {
        id:3,
        text:'깔@롱지게 디자인하기',
        done:true
    },
    {
        id:4,
        text:'밥먹기',
        done:false
    },
    {
        id:5,
        text:'살빼기',
        done:false
    },
];

function todoReducer(state, action) {
    // todo 생성,제거,토글(done)

    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

// Context 생성
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
// NextID 를 넘겨야 하는 이유 - 생성시 NextId를 사용해야함
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodo);
    const nextId = useRef(6); // 기본값 설정이 되어 있어서

    return (
        <TodoStateContext.Provider value={state}> {/*state를 context로 전달 */}
            <TodoDispatchContext.Provider value={dispatch}> {/*dispatch를 context로 전달*/}
                <TodoNextIdContext.Provider value={nextId}> {/*nextId를 context로 전달*/}
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

// useContext 직접 사용하지 않고 Hook을 만들어 내보내기

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoContext.Provider');
    }
    return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if (!context) {
        throw new Error('Cannot find TodoContext.Provider');
    }
    return useContext(TodoNextIdContext);
}
export function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context) {
      throw new Error('Cannot find TodoContext.Provider');
    }
    return context;
  }


