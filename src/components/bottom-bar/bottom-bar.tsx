import { FaComment, FaDog, FaHome } from "react-icons/fa";
import "./bottom-bar.css";
import { redirect } from "../../utils/utils";
export function BottomBar() {
  return (
    <div className="bar-container">
      <div
        className="item-menu"
        onClick={() => {
          redirect("/home");
        }}
      >
        <FaHome className="icon-menu" />
        <span className="active">Início</span>
      </div>
    </div>
  );
}
