import { useState, useRef } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);
  const checkDiv5 = useRef(false);

  const addOne = () => {
    // write code here
    setCount(prevCount => {
      const next = prevCount + 1;

      if (checkDiv5.current && next % 5 === 0) {
        checkDiv5.current = false;

        return next + 100;
      }

      checkDiv5.current = false;

      return next;
    });
  };

  const add100 = () => {
    // write code here
    checkDiv5.current = true;
    setCount(prevCount => prevCount + 100);
  };

  const increase = () => {
    if (count % 5 === 0) {
      add100();
    }

    addOne();
  };

  return (
    <div className="App">
      <h1 className="App__title">{`Count: ${count}`}</h1>

      <button type="button" className="App__add-one" onClick={addOne}>
        Add 1
      </button>

      <button type="button" className="App__add-100" onClick={add100}>
        Add 100
      </button>

      <button type="button" className="App__increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
};
