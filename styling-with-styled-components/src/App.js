/* import logo from './logo.svg'; */
import styled, { ThemeProvider } from 'styled-components';
/* import './App.css'; */
import Circle from './styled-components/sample';
import Button from './styled-components/Button';
import Dialog from './styled-components/Dialog';
import { useState } from 'react';

const AppBlock = styled.div`
  width: 850px;
  margin: 0 auto;
  margin-top: 4rem;
  
  border: 1px solid black;
  padding: 1rem;
  box-sizing: border-box;

  display: flex;
  gap: 1rem;
`;

const ButtonGroupContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const VerticalButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end; // 버튼들을 오른쪽 정렬
  gap: 0.5rem; // 버튼 사이의 간격 조절
`;

function App() {
      
  const [dialog, setDialog] = useState(false);

  const onClick = () => {
    setDialog(true);
  };

  const onConfirm = () => {
    console.log('confirm');
    setDialog(false);
  };

  const onCancel = () => {
    console.log('cancel');
    setDialog(false);
  };
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595',
          purple: '#805ad5',
          cyan: '#17a2b8',
        },
      }}
    > <>
      <AppBlock>
        <ButtonGroupContainer>
          <ButtonGroup>
            <Button size="large">Button</Button>
            <Button size="large" outline>Button</Button>
            <Button>Button</Button>
            <Button outline>Button</Button>
            <Button size="small">Button</Button>
            <Button size="small" outline>Button</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button color="gray" size="large">Button</Button>
            <Button color="gray" size="large" outline>Button</Button>
            <Button color="gray">Button</Button>
            <Button color="gray" outline>Button</Button>
            <Button color="gray" size="small">Button</Button>
            <Button color="gray" size="small" outline>Button</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button color="pink" size="large">Button</Button>
            <Button color="pink" size="large" outline>Button</Button>
            <Button color="pink">Button</Button>
            <Button color="pink" outline>Button</Button>
            <Button color="pink" size="small">Button</Button>
            <Button color="pink" size="small" outline>Button</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button color="cyan" size="large">Button</Button>
            <Button color="cyan" size="large" outline>Button</Button>
            <Button color="cyan">Button</Button>
            <Button color="cyan" outline>Button</Button>
            <Button color="cyan" size="small">Button</Button>
            <Button color="cyan" size="small" outline>Button</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button color="purple" size="large">Button</Button>
            <Button color="purple" size="large" outline>Button</Button>
            <Button color="purple">Button</Button>
            <Button color="purple" outline>Button
            </Button>
            <Button color="purple" size="small">Button</Button>
            <Button color="purple" size="small" outline>Button</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button color="blue" size="large" fullWidth>Button</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button color="blue" size="large" outline fullWidth>Button</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button color="pink" size="large" fullWidth>Button</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button color="pink" size="large" outline fullWidth>Button</Button>
          </ButtonGroup>
        </ButtonGroupContainer>

        <VerticalButtonGroup>
          <Button color="blue" size="large" fullHeight>삭제</Button>
        </VerticalButtonGroup>
        <VerticalButtonGroup>
          <Button color="blue" size="large" outline fullHeight onClick={onClick}>삭제</Button>
        </VerticalButtonGroup>
        
      </AppBlock>
      </>
      <Dialog
        title = "삭제할까요?"
        confirmText = "삭제"
        cancelText = "취소"
        onConfirm={onConfirm}
        onCancel= {onCancel}
        visible={dialog}
      >
        데이터를 정말 삭제하시겠습니까?
      </Dialog>

    </ThemeProvider>
  );
}

export default App;