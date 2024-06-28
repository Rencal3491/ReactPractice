import React from "react";
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;
    position: relative;
    background: white;
    border-radius: 16px;
    margin: 0 auto;
    margin-top: 66px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const TodoTemplateRotatingBorder = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: conic-gradient(
        red,pink,orange, yellow, lime, aqua, cyan, blue, magenta, red
    );
    animation: rotate 12s linear infinite;
    border-radius: 16px;
    box-shadow:
        0 0 0 6px red,
        0 0 0 12px orange,
        0 0 0 18px yellow,
        0 0 0 24px green,
        0 0 0 30px blue,
        0 0 0 36px indigo,
        0 0 0 42px violet;

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const TodoTemplateContent = styled.div`
    position: relative;
    z-index: 1;
    border-radius: 16px;
    border: 12px solid white;
    width: 100%;
    height: 100%;
`;

function TodoTemplate({ children }) {
    return (
        <TodoTemplateBlock>
            <TodoTemplateRotatingBorder />
            <TodoTemplateContent>{children}</TodoTemplateContent>
        </TodoTemplateBlock>
    );
}

export default TodoTemplate;