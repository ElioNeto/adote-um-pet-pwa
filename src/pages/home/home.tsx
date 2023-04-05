import { FaDog, FaHeart, FaSearch } from "react-icons/fa";
import Logo from "../../assets/AdoteUmPet.svg";
import "./home.css";
import { Card } from "../../components/card/card";
import { BottomBar } from "../../components/bottom-bar/bottom-bar";


const searchMenu = () => {
  window.location.href = "/search";
};

const newPetMenu = () => {
  window.location.href = "/registerpet";
};

const favMenu = () => {
  window.location.href = "/favorites";
};


export function Home() {
  return (
    <>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="container">
        <div className="buttons">
          <div className="first-layer">
            <div className="btn-1" onClick={searchMenu}>
              <FaSearch className="icon" />
              <span>Pesquisar</span>
            </div>
          </div>
          <div className="second-layer">
            <div className="btn-2" onClick={newPetMenu}>
              <FaDog className="icon" />
              <span>Novo Pet</span>
            </div>
            <div className="btn-2" onClick={favMenu}>
              <FaHeart className="icon" />
              <span>Favoritos</span>
            </div>
          </div>
        </div>
        <div className="carousel">
          <h2>Meus Pets</h2>
          <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className="menu">
        <BottomBar />
      </div>
    </>
  );
}
