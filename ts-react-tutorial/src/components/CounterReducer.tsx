// Counter use Reducer
import React, { useReducer } from 'react';
// type 지정
type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };
function reducer (state:number, action: Action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

function CounterReducer() {
    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch({ type: 'INCREMENT' });
    const onDecrease = () => dispatch({ type: 'DECREMENT' });
    return (
        <div>
            <hr/>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default CounterReducer;