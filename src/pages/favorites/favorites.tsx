import Logo from "../../assets/AdoteUmPet.svg";
import "./favorites.css";
import { Card } from "../../components/card/card";
import { BottomBar } from "../../components/bottom-bar/bottom-bar";
import { authValidate, getFromLocalStorage, getSessionItem, redirect } from "../../utils/utils";
import { useEffect, useState } from "react";
import { readSubsData } from "../../utils/firebase";
import { LIKE_COLLECTION, PETS_COLLECTION, USER } from "../../utils/constants";

export function Favorites() {
  
  const [petData, setPetData] = useState<any[]>([]);
  let user = "";

  useEffect(() => {
    if (!authValidate()) redirect("/");
    else user = getSessionItem(USER)!;
  }, []);

  useEffect(() => {
    readSubsData(LIKE_COLLECTION, (cb: any) => {
      let arr: any[] = [];
      Object.keys(cb).forEach((key) => {
        if (cb[key].user === user) {
          console.log(key); //column01...
          console.log(cb[key]); //Coluna 01...
          let obj = {
            data: cb[key],
            id: key,
          };
          arr.push(obj);
        }
      });
      //like tem o pet (id) e acha petData.pet 
      setPetData(arr);
      console.log(arr);
      readSubsData(PETS_COLLECTION, (pet: any) => {
        let arrPet: any[] = [];
        console.log(pet);
       // petData.map((cbPet: any) => {
          
          //if (cbPet.data.pet === pet[])
       // });
      });
    });
  }, []);

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
          <div className="see-more-card-container">
            {petData.map((pet: any) => (
              <Card data={pet} />
            ))}
          </div>
        </div>
      </div>
      <div className="menu">
        <BottomBar />
      </div>
    </>
  );
}
