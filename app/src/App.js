import React from 'react';
import { createContext, useState } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';

export const UserCount = createContext();

function App() {
  const [count, setCount] = useState(100);
  const value = {
    count,
    setCount,
  };
  return (
    <div className="App">
      <h1>Learn useContext</h1>
      <UserCount.Provider value={value}>
        <ComponentA />
      </UserCount.Provider>
    </div>
  );
}

export default App;
