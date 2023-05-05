import { FaArrowLeft, FaHeart } from "react-icons/fa";

import "./header.css";
import { like } from "../../utils/utils";

export function Header(props: {
  location: string;
  showLike: boolean;
  user: any;
  pet: any;
}) {
  function backButton(location: string) {
    console.log("back", location);
    window.location.href = location;
  }
  function likeButton() {
    like(props.user, props.pet);
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
    </div>
  );
}
