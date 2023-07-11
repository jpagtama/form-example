import { useState, useEffect } from 'react';
import Form from './components/Form';
import './App.css';

export default function App() {
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    document.body.classList.remove('darkMode', 'lightMode');
    document.body.classList.add(`${mode}Mode`);
  }, [mode]);

  const modeHandler = () => {
    switch (mode) {
      case 'dark':
        setMode('light');
        break;
      case 'light':
        setMode('dark');
        break;
      default: setMode('dark');
    }
  }

  const modeButton = {
    "minWidth": "5rem",
    "padding": "0.5rem 1rem",
    "border": "none",
    "borderRadius": "5px",
    "backgroundColor": "var(--primary-color)",
    "color": "var(--text-color)",
    "alignSelf": "center",
    "cursor": "pointer"
  }

  return (
    <div className={`app`}>
      <header >
        <h1 >Form Example</h1>
      </header>
      <button style={modeButton} onClick={modeHandler} >{`${mode === 'dark' ? 'light' : 'dark'} mode`}</button>
      <Form />
      <footer>
        <ul className={`footerContent`} >
          <li>Created by Julian Pagtama</li>
          <li>View the <a href="https://github.com/jpagtama/form-example">code</a></li>
        </ul>
      </footer>
    </div>
  )
};
