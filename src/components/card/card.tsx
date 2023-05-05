import { FaHeart, FaMale, FaMars, FaVenus } from "react-icons/fa";
import "./card.css";

import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { "aria-label": "Color switch demo" } };
export function Card(props: {
  showActions?: boolean;
  showHeart?: boolean;
  data: any;
}) {
  return (
    <div className="card">
      {props.showHeart && (
        <div className="card-header">
          <div className="btn-heart">
            <FaHeart
              className="card-heart-icon"
              onClick={() => console.log("like")}
            />
          </div>
        </div>
      )}

      <div className="photo">
        <img src={props.data.data.petPic} alt="Foto Samantha" />
      </div>
      <div className="header">
        <span>{props.data.data.petName}</span>
        {props.data.data.petSexOptions === "male" ? (
          <FaMars className="genre mars" />
        ) : (
          <FaVenus className="genre venus" />
        )}
      </div>
      {props.showActions && (
        <div className="actions">
          <PinkSwitch {...label} defaultChecked />
          <span>Adotado</span>
        </div>
      )}
    </div>
  );
}
