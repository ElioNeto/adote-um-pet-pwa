import Logo from "../../assets/AdoteUmPet.svg";
import "./favorites.css";
import { Card } from "../../components/card/card";
import { BottomBar } from "../../components/bottom-bar/bottom-bar";
import { authValidate, getFromLocalStorage, redirect } from "../../utils/utils";
import { useEffect } from "react";
import { LIKE_COLLECTION, USER } from "../../utils/constants";

export function Favorites() {
  useEffect(() => {
    if (!authValidate()) redirect("/");
  });

  function getFav() {
    getFromLocalStorage(USER);
  }

  return (
    <>
      <div className="logo-fav">
        <img src={Logo} alt="logo" />
      </div>
      <div className="container-fav">
        <div className="carousel-fav">
          <h2 className="fav-h2">Favoritos</h2>
          <div className="cards-fav">
            {/*  <Card />
            <Card /> */}
          </div>
        </div>
      </div>
      <div className="menu">
        <BottomBar />
      </div>
    </>
  );
}
