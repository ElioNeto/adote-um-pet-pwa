import { FaVenus } from "react-icons/fa";
import "./card.css";

import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

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
export function Card() {
  return (
    <div className="card">
      <div className="photo">
        <img
          src="https://blog-static.petlove.com.br/wp-content/uploads/2020/11/gato-rosna.jpg"
          alt="Foto Samantha"
        />
      </div>
      <div className="header">
        <span>Samantha</span>
        <FaVenus className="genre" />
      </div>

      <div className="actions">
        <PinkSwitch {...label} defaultChecked />
        <span>Adotado</span>
      </div>
    </div>
  );
}
