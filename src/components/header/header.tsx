import { FaArrowLeft, FaHeart } from "react-icons/fa";

import "./header.css";
import { like } from "../../utils/utils";
import { useState } from "react";

export function Header(props: {
  location: string;
  showLike: boolean;
  user: any;
  pet: any;
}) {
  const [showPopup, setShowPopup] = useState(false);

  function backButton(location: string) {
    console.log("back", location);
    window.location.href = location;
  }
  function likeButton() {
    like(props.user, props.pet);
    setShowPopup(true);
    const timer = setTimeout(() => {
      hidePopup();
    }, 2000);
  }
  function hidePopup() {
    setShowPopup(false);
  }
  return (
    <div className="header-container">
      <div className="header-button" onClick={() => backButton(props.location)}>
        <FaArrowLeft className="header-icon" />
      </div>
      {props.showLike && (
        <div className="header-button" onClick={() => likeButton()}>
          <FaHeart className="header-icon" />
        </div>
      )}
      {showPopup && (
        <div className="popup-container">
          <p className="popup-message">Favoritado com sucesso!</p>
        </div>
      )}
    </div>
  );
  
}
