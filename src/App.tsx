import './App.css';
import Form from './components/Form';

export default function App() {

  const styles = {
    "alignSelf": "center",
    "paddingBottom": "2rem",
    "fontSize": "clamp(3rem, 1rem + 10vw, 5rem)"
  }

  return (
    <div className={`app lightMode`}>
      <h1 style={styles} >Form Example</h1>
      <Form />
    </div>
  )
};
