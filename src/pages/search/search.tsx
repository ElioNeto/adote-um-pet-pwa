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

function isEmpty(value: any) {
  return value === undefined || value === "";
}

export function Search() {
  const [petDataP, setPetDataP] = useState<any[]>([]);
  const [petData, setPetData] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    search: "",
    search2: "",
    petSexOptions: "",
    petAge: 0,
    petStartWeight: Number,
    petEndWeight: Number,
    petLocation: "",
    petOptions: "",
  });

  const negativeMask = (value: any) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    console.log(value);
    if (value < 0) {
      value = ''; 
      console.log(value);
    }
    return value
  }

  useEffect(() => {
    if (!authValidate()) redirect("/");
  });
  useEffect(() => {
    readSubsData(PETS_COLLECTION, (cb: any) => {
      setPetDataP(cb);
    });
  }, []);
  useEffect(() => {
    let arr: any[] = [];
    let cb: any = petDataP;
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
  }, [formData.search]);

  function debugFormData() {
    console.log(formData);
  }

  function filterValidate(e: any): any {
    e.preventDefault();
    debugFormData();
    let arr: any[] = [];
    let arr2: any[] = [];
    let cb: any = petDataP;

    Object.keys(cb).forEach((key) => {
      let obj = {
        data: cb[key],
        id: key,
      };
      arr2.push(obj);
    });
    //sexOption
    arr2.map((pet: any) => {
      console.log("PET: " + pet.data.petOptions);
      console.log("HERE: " + pet.data.petName);
        console.log("PET: " + pet.data.petLocation);
        console.log("PET: " + pet.data.petAge);
        console.log("PET: " + pet.data.petWeight);
        console.log(isEmpty(formData.petStartWeight));
        console.log(formData.petStartWeight === undefined);
        console.log(isNaN(Number(formData.petStartWeight)));
        console.log("HERE: " + formData.petStartWeight + "A");
        console.log("HERE: " + formData.petLocation);
      
      if (
        pet.data.petSexOptions === formData.petSexOptions ||
        formData.petSexOptions === "ambos"
      ) {
        if (!formData.petAge || pet.data.petAge === formData.petAge) {
          
          if (
            (parseInt(pet.data.petWeight) >= Number(formData.petStartWeight) &&
            parseInt(pet.data.petWeight) <= Number(formData.petEndWeight)) || (isEmpty(formData.petStartWeight) && isEmpty(formData.petEndWeight))
          ) {
            if (
              !formData.petLocation ||
              pet.data.petLocation.toLowerCase().includes(formData.petLocation)
            ) {
              if (
                !formData.petOptions ||
                pet.data.petOptions === formData.petOptions
              ) {
                let obj = {
                  data: pet.data,
                  id: pet.id,
                };
                arr.push(obj);
              }
            }
          }
        }
      }
    });

    console.log(arr);
    setPetData(arr);
  }

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

    if (e.target.name === 'petAge' || e.target.name ===  "petStartWeight" || e.target.name ===  "petEndWeight") {
      e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos
      if (e.target.value === '') {
        e.target.value = ''; // Caso todos os caracteres sejam removidos, define o valor como uma string vazia
      } else {
        e.target.value = parseInt(e.target.value, 10); // Converte a string numérica para um número inteiro
        if (e.target.value < 0) {
          e.target.value = ''; // Caso o número seja negativo, define o valor como uma string vazia
        }
      }
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <form className="form">
          {isHideFilter ? (
            <input
              type="text"
              placeholder="Pesquisar..."
              name="search"
              value={formData.search}
              onChange={(e) => handleChange(e)}
            />
          ) : (
            <input
              type="text"
              placeholder="Pesquisar..."
              name="search2"
              value={formData.search}
              disabled
            />
          )}
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
                defaultValue=""
                name="petSexOptions"
                className="genre-container"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="F"
                  onChange={(e) => handleChange(e)}
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="M"
                  onChange={(e) => handleChange(e)}
                />
                <FormControlLabel
                  value="ambos"
                  control={<Radio />}
                  label="Ambos"
                  onChange={(e) => handleChange(e)}
                />
              </RadioGroup>
            </FormControl>
            <input
              type="number"
              placeholder="Idade"
              name="petAge"
              min={0}
              onChange={(e) => handleChange(e)}
            />
            <div className="filter-weight">
              <input
                type="number"
                placeholder="Peso(kg)"
                name="petStartWeight"
                min={0}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="number"
                placeholder="até"
                name="petEndWeight"
                min={0}
                onChange={(e) => handleChange(e)}
              />
            </div>

            {/*  <input type="text" placeholder="Raça" name="petRace" />
            <input type="text" placeholder="Cor" name="petColor" /> */}
            <input
              type="text"
              placeholder="Cidade"
              name="petLocation"
              onChange={(e) => handleChange(e)}
            />
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Categorias
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="petOptions"
                className="genre-container"
              >
                <FormControlLabel
                  value="dog"
                  control={<Radio />}
                  label="Cachorro"
                  onChange={(e) => handleChange(e)}
                />
                <FormControlLabel
                  value="cat"
                  control={<Radio />}
                  label="Gato"
                  onChange={(e) => handleChange(e)}
                />
                <FormControlLabel
                  value="othersPets"
                  control={<Radio />}
                  label="Outros pets"
                  onChange={(e) => handleChange(e)}
                />
              </RadioGroup>
            </FormControl>
          </div>
          <button
            onClick={(e) => {
              filterValidate(e);
            }}
          >
            Buscar
          </button>
          <label className="see-more">Pets</label>
          <div className="see-more-card-container">
            {petData.map((pet: any) => (
              <Card data={pet} />
            ))}
          </div>
        </form>
      </div>
      <div className="menu" style={{ marginBottom: '100px' }}>
        <BottomBar />
      </div>
    </>
  );
}
