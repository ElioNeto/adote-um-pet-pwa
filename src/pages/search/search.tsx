import "./search.css";
import Logo from "../../assets/AdoteUmPet.svg";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { BottomBar } from "../../components/bottom-bar/bottom-bar";
import { useState } from "react";
import { Card } from "../../components/card/card";

export function Search() {
  const [isHideFilter, setIsHideFilter] = useState(true);

  function hideShowFilter() {
    if (isHideFilter) {
      document.getElementById("filter-contents")?.classList.remove("hide");
      document.getElementById("btn-filter")?.classList.add("show");
    } else {
      document.getElementById("filter-contents")?.classList.add("hide");
      document.getElementById("btn-filter")?.classList.remove("show");
    }

    setIsHideFilter(!isHideFilter);
  }

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="form">
          <input type="text" placeholder="Pesquisar..." name="search" />
          <label
            className="filter-fake-button"
            onClick={hideShowFilter}
            id="btn-filter"
          >
            {isHideFilter ? "exibir filtros" : "ocultar filtros"}
          </label>
          <div id="filter-contents" className="hide">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Sexo</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="both"
                name="radio-buttons-group"
                className="genre-container"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="F"
                />
                <FormControlLabel value="male" control={<Radio />} label="M" />
                <FormControlLabel
                  value="both"
                  control={<Radio />}
                  label="Ambos"
                />
              </RadioGroup>
            </FormControl>
            <input type="text" placeholder="Idade" name="petAge" />
            <div className="filter-weight">
              <input type="text" placeholder="Peso(kg)" name="petStartWeight" />
              <input type="text" placeholder="até" name="petEndWeight" />
            </div>

            <input type="text" placeholder="Raça" name="petRace" />
            <input type="text" placeholder="Cor" name="petColor" />
            <input type="text" placeholder="Cidade" name="petLocation" />
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Categorias
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="dog"
                name="radio-buttons-group"
                className="genre-container"
              >
                <FormControlLabel
                  value="dog"
                  control={<Radio />}
                  label="Cachorro"
                />
                <FormControlLabel
                  value="cat"
                  control={<Radio />}
                  label="Gato"
                />
                <FormControlLabel
                  value="othersPets"
                  control={<Radio />}
                  label="Outros pets"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <label className="see-more">Veja mais</label>
          <div className="see-more-card-container">
            <Card showHeart />
            <Card showHeart showActions />
            <Card showHeart />
          </div>
        </div>
      </div>
      <div className="menu">
        <BottomBar />
      </div>
    </>
  );
}
