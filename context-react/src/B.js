import React from 'react';
import UserContext from './ContextAPI2';
import { RainbowBorder, RainbowInput, RainbowButton } from './RainbowBorder';

// A 컴포넌트
const B = () => {
    const input1 = React.useRef(null);
    const input2 = React.useRef(null);

    const {state, action} = React.useContext(UserContext);
    const handleClick = () => {
        action.setUser({
            id: input1.current.value, 
            name: input2.current.value
        });
        input1.current.value = '';
        input2.current.value = '';
    }
    return (
        <div>
            <div>
                <h3>B Component</h3>
                <input type="text" ref={input1} />
                <input type="text" ref={input2} />
                <button onClick={handleClick}>Data Change</button>            </div>
            <div>
                <p>{state.user.id}</p> <br />
                <p>{state.user.name}</p> <br />
            </div>
        </div>
    )
}

export default B;