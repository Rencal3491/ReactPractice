import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState<number>(0);
    type Information = {name : string; description : string};
    const [info, setInfomation] = useState<Information | null>(null);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
            <button onClick={() => setCount(count - 1)}>
                -
            </button>
            <button onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    );
}

export default Counter;