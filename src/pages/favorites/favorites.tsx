import { FaDog, FaHeart, FaSearch } from "react-icons/fa";
import Logo from "../../assets/AdoteUmPet.svg";
import "./favorites.css";
import { Card } from "../../components/card/card";
import { BottomBar } from "../../components/bottom-bar/bottom-bar";

export function Favorites() {
  return (
    <>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="container">
        <div className="carousel">
          <h2>Favoritos</h2>
          <div className="cards-fav">
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
