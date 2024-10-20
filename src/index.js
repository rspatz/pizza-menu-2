import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <h1>Hello React!</h1>;
}

const root = ReactDOM.createRoot(document.getElementByID('root'));
root.render(<App />);
