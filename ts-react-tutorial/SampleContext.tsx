import React from "react";

type Color = 'red' | 'orange' | 'yellow';

type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
};

type Action =
  | { type: 'SET_COUNT'; count: number }
  | { type: 'SET_TEXT'; text: string }
  | { type: 'SET_COLOR'; color: Color }
  | { type: 'TOGGLE_GOOD' };

// dispatch type
type SampleDispatch = React.Dispatch<Action>; // action에 지정된 타입만 가능

// Context 
const SampleStateContext = React.createContext<State | null>(null);
const SampleDispatchContext = React.createContext<SampleDispatch | null>(null);

// Reducer
function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_COUNT':
      return {
        ...state,
        count: action.count,
      };
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text,
      };
    case 'SET_COLOR':
      return {
        ...state,
        color: action.color,
      };
    case 'TOGGLE_GOOD':
      return {  
        ...state,
        isGood: !state.isGood
      };
    default:
      throw new Error('Unhandled action');
  }
}

// SampleProvider 에서 useReducer를 사용하고, SampleStateContext.Provider 와 
// SampleDispatchContext.Provider로 children 을 감싸서 반환합니다.

export function SampleProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, {
    count: 0,
    text: 'hello',
    color: 'red',
    isGood: true,
  });
  return (  
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
    )
}

// state와 dispatch를 쉽게 사용하는 커스텀 Hooks
export function useSampleState() {
  const state = React.useContext(SampleStateContext);
  if (!state ) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return state;
}
export function useSampleDispatch() {
  const dispatch = React.useContext(SampleDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return dispatch;
}


    