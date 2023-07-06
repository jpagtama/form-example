import { useState } from 'react';
import Form from './components/Form';
import './App.css';

export default function App() {
  const [mode, setMode] = useState('dark');

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

  const linkStyles = {
    "alignSelf": "center"
  }

  return (
    <div className={`app ${mode}Mode`}>
      <header >
        <h1 >Form Example</h1>
      </header>
      <button style={modeButton} onClick={modeHandler} >{`${mode === 'dark' ? 'light' : 'dark'} mode`}</button>
      <a style={linkStyles} href="">this is a link</a>
      <Form />
    </div>
  )
};
