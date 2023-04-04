import { FaDog, FaHeart, FaSearch } from "react-icons/fa";
import Logo from "../../assets/AdoteUmPet.svg";
import "./home.css";
export function Home() {
  return (
    <>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="container">
        <div className="buttons">
          <div className="first-layer">
            <div className="btn-1">
              <FaSearch className="icon" />
              <span>Pesquisar</span>
            </div>
          </div>
          <div className="second-layer">
            <div className="btn-2">
              <FaDog className="icon" />
              <span>Novo Pet</span>
            </div>
            <div className="btn-2">
              <FaHeart className="icon" />
              <span>Favoritos</span>
            </div>
          </div>
        </div>
        <div className="carousel">
          <h2>Meus Pets</h2>
          <div className="card"></div>
        </div>
      </div>
      <div className="menu"></div>
    </>
  );
}
