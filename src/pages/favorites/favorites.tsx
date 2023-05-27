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
 const [isLoading, setIsLoading]= useState(true)

  let user = "";
 // let isLoading = true

  useEffect(() => {
    if (!authValidate()) redirect("/");
    else user = getSessionItem(USER)!;
  }, []);

  useEffect(() => {
    let arr: any[] = [];
    readSubsData(LIKE_COLLECTION, (like: any) => {
       readSubsData(PETS_COLLECTION, (pet: any) => {
        Object.keys(like).forEach((likeKey) => {
          console.log(like);
          if(like[likeKey].user === user){
            Object.keys(pet).forEach((petKey) => {
if(like[likeKey].pet === petKey){
console.log(petKey);
let obj = {
  data: pet[petKey],
  id: petKey,
};
arr.push(obj)}

            })
          }
        })
        setPetData(arr)
       })
       
    });

  }, []);

/* useEffect(()=> {
  setTimeout(() => {
    setIsLoading(false)
  }, 3000);
}, []) */

  return (
<>
  <div className="logo-fav">
    <img src={Logo} alt="logo" />
  </div>
  <div className="container-fav">
    <div className="carousel-fav">
      <h2 className="fav-h2">Favoritos</h2>
      <div className="see-more-card-container">
         {petData.map((pet: any) => (
          <Card data={pet} key={pet.id}/>
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
