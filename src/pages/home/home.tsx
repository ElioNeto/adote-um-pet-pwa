import { FaDog, FaHeart, FaSearch } from "react-icons/fa";
import Logo from "../../assets/AdoteUmPet.svg";
import "./home.css";
import { Card } from "../../components/card/card";
import { BottomBar } from "../../components/bottom-bar/bottom-bar";
import { authValidate, getSessionItem, redirect, removeSessionItem } from "../../utils/utils";
import { useEffect, useState } from "react";
import { deleteData, readSubsData } from "../../utils/firebase";
import { PETS_COLLECTION, TOKEN, USER } from "../../utils/constants";

export function Home() {
  const [petData, setPetData] = useState<any[]>([]);
  let user = "";

  function handleSubmit() {
    removeSessionItem(TOKEN);
    redirect("/");
  }

  useEffect(() => {
    if (!authValidate()) redirect("/");
    else user = getSessionItem(USER)!;
  }, []);

  useEffect(() => {
    readSubsData(PETS_COLLECTION, (cb: any) => {
      let arr: any[] = [];
      Object.keys(cb).forEach((key) => {
        if (cb[key].petOwner === user) {
          console.log(key); //column01...
          console.log(cb[key]); //Coluna 01...
          let obj = {
            data: cb[key],
            id: key,
          };
          arr.push(obj);
        }
      });
      setPetData(arr);
      console.log(arr);
    });
  }, []);

  return (
    <>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="form">
        <button className="logout" onClick={() => {handleSubmit()}}>
        Sair
        </button>
      </div>
      <div className="container">
        <div className="buttons">
          <div className="first-layer">
            <div
              className="btn-1"
              onClick={() => {
                redirect("/search");
              }}
            >
              <FaSearch className="icon" />
              <span>Pesquisar</span>
            </div>
          </div>
          <div className="second-layer">
            <div
              className="btn-2"
              onClick={() => {
                redirect("/registerpet");
              }}
            >
              <FaDog className="icon" />
              <span>Novo Pet</span>
            </div>
            <div
              className="btn-2"
              onClick={() => {
                redirect("/favorites");
              }}
            >
              <FaHeart className="icon" />
              <span>Favoritos</span>
            </div>
          </div>
        </div>
        <div className="carousel">
          <h2>Meus Pets</h2>
          <div className="cards">
            {petData.map((pet: any) => (
              <Card showActions data={pet} key={pet.id} />
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
