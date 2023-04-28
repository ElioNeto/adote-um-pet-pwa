import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import "./login.css";
import Logo from "../../assets/AdoteUmPet.svg";
import { redirect } from "../../utils/utils";
import { useEffect, useState } from "react";
import { createUser, readSubsData } from "../../utils/firebase";

export function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

async function teste(){
  let a = await readSubsData('/users_bkp')
  console.log(a);
}

  const homeLogin = () => {
    window.location.href = "/home";
  };

  
  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="form">
        <input type="text" placeholder="email"  onChange={event => setEmail(event.target.value)}/>
        <input type="password" placeholder="senha" onChange={event => setPassword(event.target.value)}/>

        {msg !== ''&& <span>{msg}</span>}
        

        <div className="forgot-container">
          <a href="/home">esqueceu sua senha?</a>
        </div>
        <button onClick={teste}>Acessar</button>
      </div>
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
        <button className="signup" onClick={() => redirect("/signup")}>cadastre-se</button>
      </div>
    </div>
  );
}
