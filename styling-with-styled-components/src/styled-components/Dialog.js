import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Button from './Button';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;
const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        transform: translateY(0);
    }
`;

const slideDown = keyframes`
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(200px);
    }
`;

const DarkBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);

    // animation
    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;

    // 사라지는 부분
    ${props => props.disappear && css`
        animation-name: ${fadeOut};
        animation-fill-mode: forwards;
    `}
`;

const DialogBlock = styled.div`
    width: 320px;
    padding: 1.5rem;
    background: white;
    border-radius: 4px;
    h3 {
        margin: 0;
        font-size: 1.5rem;
    }
    p {
        fonst-size: 1.125rem;
    }
    // animation
    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${props => props.disappear ? slideDown : slideUp};
    animation-fill-mode: forwards;

    opacity: ${props => props.disappear ? 0 : 1};
    transition: opacity 0.25s ease-out;
`;

const ButtonGroup = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: flex-end;
`;

function Dialog ({ title, children, confirmText='확인', cancelText='취소', onConfirm, onCancel, visible }) {
    const [animate, setAnimate] = useState(false);
    const [localVisible, setLocalVisible] = useState(visible);

    useEffect(() => {
        if (localVisible && !visible) {
            setAnimate(true);
            setTimeout(() => {
                setAnimate(false);
                setLocalVisible(false);
            }, 300);
        }
        if (!localVisible && visible) {
            setAnimate(true);
            setLocalVisible(true);
        }
    }, [localVisible, visible]);
    
    if (!localVisible && !animate) return null;

    return (
        <DarkBackground disappear={!visible}>
            <DialogBlock disappear={!visible}>
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroup>
                    <Button color='gray' onClick={onCancel}>{cancelText}</Button>
                    <Button color='pink' onClick={onConfirm}>{confirmText}</Button>
                </ButtonGroup>
            </DialogBlock>
        </DarkBackground>
    );
}

export default Dialog;