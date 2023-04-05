import { FaComment, FaDog, FaHome } from "react-icons/fa";
import "./bottom-bar.css";
export function BottomBar() {
  return (
    <div className="bar-container">
      <div className="item-menu">
        <FaHome className="icon-menu" />
        <span className="active">Inicio</span>
      </div>
      <div className="item-menu">
        <FaComment className="icon-menu" />
        <span>Inicio</span>
      </div>
      <div className="item-menu">
        <FaDog className="icon-menu" />
        <span>Inicio</span>
      </div>
    </div>
  );
}
