import { FaArrowLeft, FaHeart } from "react-icons/fa";

import "./header.css";

export function Header(props: {
  id: any;
  location: string;
  showLike: boolean;
}) {
  function backButton(location: string) {
    console.log("back", location);
    window.location.href = location;
  }
  function likeButton(id: string) {
    console.log("like", id);
  }
  return (
    <div className="header-container">
      <div className="header-button" onClick={() => backButton(props.location)}>
        <FaArrowLeft className="header-icon" />
      </div>
      {props.showLike && (
        <div className="header-button" onClick={() => likeButton(props.id)}>
          <FaHeart className="header-icon" />
        </div>
      )}
    </div>
  );
}
