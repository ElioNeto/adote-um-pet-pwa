import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import "./login.css";
import Logo from "../../assets/AdoteUmPet.svg";
import { getSessionItem, redirect } from "../../utils/utils";
import { useEffect, useState } from "react";
import { login } from "../../utils/firebase";
import { TOKEN } from "../../utils/constants";

export function Login() {
  var [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  function handlerLogin(e: any) {
    e.preventDefault();

    email = email.toLowerCase();

    login(email, password);
    setTimeout(() => {
      let token = getSessionItem(TOKEN);
      if (token) redirect("/home");
      else setMsg("Email ou senha inválido(s)!");
    }, 1000);
  }

  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <form className="form" onSubmit={(e) => handlerLogin(e)}>
        <input
          type="text"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type="password"
          placeholder="senha"
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        {msg !== "" && <span>{msg}</span>}

        
        <button type="submit">Acessar</button>
      </form>
      <div className="alternative">
        <div className="divider"></div>
        <span>ou acesse com</span>
        <div className="divider rotate180deg"></div>
      </div>
      <div className="socials">
        <div className="social-button">
          <FaGoogle className="google" />
        </div>
        <div className="social-button">
          <FaFacebook className="facebook" />
        </div>
        <div className="social-button">
          <FaApple className="apple" />
        </div>
      </div>
      <div className="form">
        <button className="signup" onClick={() => redirect("/signup")}>
          Cadastre-se
        </button>
      </div>
    </div>
  );
}
