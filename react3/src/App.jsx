import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const errorMessage = validate(email, password);
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        login(email, password);
      }}
    >
      <input
        type="text"
        name="email"
        placeholder="Email"
        autoComplete="off"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      ></input>
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      ></input>
      <p>{errorMessage}</p>
      <button type="submit" disabled={errorMessage}>
        Iniciar sesión
      </button>
    </form>
  );
};

const login = (email, password) => {
  if (email === "hola@desarrolloutil.com" && password === "test")
    alert("login correcto");
  else alert("login incorrecto");
};

const validate = (email, password) => {
  if (!email.includes("@")) return "Email incorrecto";
  if (password.length < 4) return "Contraseña incorrecta";
};

export default App;
