type FormProps = {
  handleClick: ()=> void
};

function Form({ handleClick }:FormProps) {
  return (
    <>
      <label htmlFor="service-name">Nome do serviço</label>
      <input type="text" name="service-name" id="service-name" />

      <label htmlFor="login">Login</label>
      <input type="text" name="login" id="login" />

      <label htmlFor="password">Senha</label>
      <input type="password" name="password" id="password" />

      <label htmlFor="URL">URL</label>
      <input type="text" name="URL" id="URL" />

      <button type="submit">Cadastrar</button>
      <button type="button" onClick={ handleClick }>Cancelar</button>
    </>
  );
}

export default Form;
