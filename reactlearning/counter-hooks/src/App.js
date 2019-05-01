import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter.js';
import TodoList from './components/TodoList.js';

function App() {
  return (
    <div>
    <Counter name="This is a React Redux Hooks Counter"></Counter>
    <TodoList/>
    </div>
  );
}

export default App;
