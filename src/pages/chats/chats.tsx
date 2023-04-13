import "./chats.css";
import Logo from "../../assets/AdoteUmPet.svg";
import { BottomBar } from "../../components/bottom-bar/bottom-bar";

export function Chats() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="form">
          <input type="text" placeholder="Pesquisar..." name="search"/>
        </div>
      </div>
      <div className="menu"> 
        <BottomBar />
      </div>
    </>
  );
}