import "./search.css";
import Logo from "../../assets/AdoteUmPet.svg";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { BottomBar } from "../../components/bottom-bar/bottom-bar";
import { useState, useEffect } from "react";
import { authValidate, redirect } from "../../utils/utils";
import { Card } from "../../components/card/card";
import { PETS_COLLECTION } from "../../utils/constants";
import { readSubsData } from "../../utils/firebase";

export function Search() {
  const [petData, setPetData] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    search: "",
  });
  useEffect(() => {
    if (!authValidate()) redirect("/");
  });

  useEffect(() => {
    readSubsData(PETS_COLLECTION, (cb: any) => {
      let arr: any[] = [];
      // let cbJson = JSON.stringify(cb);

      //  console.log(cbJson.includes("cat"));
      Object.keys(cb).forEach((key) => {
        if (JSON.stringify(cb[key]).includes(formData.search)) {
          console.log(key); //column01...
          console.log(cb[key]); //Coluna 01...
          let obj = {
            data: cb[key],
            id: key,
          };
          arr.push(obj);
        }
      });
      setPetData(arr);
      console.log(arr);
    });
  }, [formData]);

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

  function handleChange(e: any) {
    e.preventDefault();

    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <form className="form">
          <input
            type="text"
            placeholder="Pesquisar..."
            name="search"
            value={formData.search}
            onChange={(e) => handleChange(e)}
          />
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
            {/* <Card showHeart />
            <Card showHeart showActions />
            <Card showHeart /> */}
          </div>
        </form>
      </div>
      <div>
        {petData.map((pet: any) => (
          <p>{pet.data.petName}</p>
        ))}
      </div>
      <div className="menu">
        <BottomBar />
      </div>
    </>
  );
}
