import React from 'react';

type GreetingProps = {
    name: string;
    mark?: string;
    optional?: string;               // ? = optional , ! = non-nullable
    onClick: (name: string) => void; // 리턴하지 않음
};

// const Greeting = ({ name }: GreetingProps) => {
//     return <h1>Hello, {name}!</h1>;
// };

function Greeting({ name , mark, optional, onClick }: GreetingProps) {
    const handleClick = () => onClick(name);
    return (
    <div>
        Hello, {name}{mark}!
        {optional && <p>{optional}</p>}
        <div>
            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    </div>

    );
}

export default Greeting;