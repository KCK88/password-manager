import { useState } from 'react';

type FormProps = {
  handleClick: ()=> void
};

function Form({ handleClick }:FormProps) {
  const [data, setData] = useState({
    serviceName: '',
    login: '',
    password: '',
  });

  const validateForm = () => {
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]+/;
    const testSpecial = hasSpecial.test(data.password);
    const hasAny = /\d/;
    const testAny = hasAny.test(data.password);
    const hasLetter = /[a-zA-Z]/;
    const testLetter = hasLetter.test(data.password);

    return data.password.length > 8
      && data.password.length < 16
      && testSpecial && testAny
      && testLetter && !!data.login && !!data.serviceName;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <>
      <label htmlFor="service-name">Nome do serviço</label>
      <input
        type="text"
        value={ data.serviceName }
        name="serviceName"
        id="service-name"
        onChange={ handleChange }
      />

      <label htmlFor="login">Login</label>
      <input
        type="text"
        value={ data.login }
        name="login"
        id="login"
        onChange={ handleChange }
      />

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        value={ data.password }
        name="password"
        id="password"
        onChange={ handleChange }
      />

      <label htmlFor="URL">URL</label>
      <input type="text" name="URL" id="URL" />

      <button type="submit" disabled={ !validateForm() }>Cadastrar</button>
      <button type="button" onClick={ handleClick }>Cancelar</button>
    </>
  );
}

export default Form;
