function App() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="usuario">Usuário:</label>
          <input type="text" id="usuario" />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default App;
