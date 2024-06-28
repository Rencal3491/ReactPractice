import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import MyForm from './components/MyForm';
import CounterReducer from './components/CounterReducer';
import ReducerSample, { SampleProvider } from './components/ReducerSample';
import ReducerSample2 from './components/ReducerSample2';
function App() {
  const onClick = (name: string) => {
    console.log(`${name} say hello!`);
  }

  const onSubmit = (form: { name: string, description: string }) => {
    console.log(form);
  }
  return (
    <div className="App">
      {/* <Greeting name = "World" mark=' GoodBye ' optional='World' onClick={onClick} />
      <Counter />
      <MyForm onSubmit={onSubmit} />

      <CounterReducer /> */}
    <SampleProvider>
      <ReducerSample2 />
    </SampleProvider>
    </div>
  );
}

export default App;
