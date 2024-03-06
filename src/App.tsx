import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';

function App() {
  const [toggleForm, setToggleForm] = useState(false);

  const handleClick = () => {
    setToggleForm(!toggleForm);
  };

  return (
    <div>
      <Title />
      {toggleForm && <Form handleClick={ handleClick } />}
      {!toggleForm
      && (
        <button
          type="button"
          onClick={ handleClick }
        >
          Cadastrar nova senha
        </button>
      )}
    </div>
  );
}

export default App;
