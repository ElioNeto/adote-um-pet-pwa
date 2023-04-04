
import { FaGoogle,  FaFacebook, FaApple} from 'react-icons/fa';
import './login.css'
import Logo from '../../assets/AdoteUmPet.svg'

const hello = () => {
  
  history.push('/home');
};


export function Login() {
  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="form">
        <input type="text" placeholder="email" />
        <input type="password" placeholder="senha" />
        <div className="forgot-container">
          <a href="/home">esqueceu sua senha?</a>
        </div>
        <button onClick={hello}>Acessar</button>
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
        <button className="signup">cadastre-se</button>
      </div>
    </div>
  );
}
