import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "./TodoContext";
const CircleButton = styled.div`
    background: #38d9a9;
    &:hover {
        background: #0000ff;
    }
    &:active {
        background: yellow;
    }
    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;

    transition: 0.125s all ease-in;
    ${props=>
        props.open && css`
            background: #ff0000;
            &:hover {
                background: #0000ff;
            }
            &:active {
                background: magenta;
            }
            transform: translate(-50%, 50%) rotate(45deg);
        `
    }
`;

const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;

const InsertForm = styled.form`
    background: #ffff00;
    padding: 32px;
    padding-bottom: 72px;

    border-bottom-left-radius: 1px;
    border-top-right-radius: 152px;
    border-top-left-radius: 162px;
    border-bottom-right-radius: -30px;
    border-top: 1px solid #00ff00;
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 5px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;
function TodoCreate() {

    // create() 컴포넌트 상태
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
  
    // 추가 버튼 클릭 이벤트시 동작 설정... 
    const onToggle = () => setOpen(!open);
  
    // input 입력값 처리... 
    const onChange = e => setValue(e.target.value);
  
    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();
    // 기능
    const onSubmit = e => {
      e.preventDefault();   // 새로고침 방지
      dispatch({
        type: 'CREATE',
        todo: {
          id: nextId.current,
          text: value,
          done: false
        }
      });
      setValue('');
      setOpen(false);
      nextId.current += 1;
    };
  
    return (
      <>
        { open && (
          <InsertFormPositioner>
            <InsertForm onSubmit={onSubmit}>
              <Input 
                autoFocus 
                placeholder="할 일을 입력 후, Enter를 누르세요"
                onChange={onChange}
                value={value} 
              />
            </InsertForm>
          </InsertFormPositioner>
        )}
        <CircleButton onClick={onToggle} open={open}>
          <MdAdd />
        </CircleButton>
      </>
    );
  }
  export default TodoCreate;