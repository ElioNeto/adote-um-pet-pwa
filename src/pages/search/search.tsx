import "./search.css";
import Logo from "../../assets/AdoteUmPet.svg";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const homeLogin = () => {
  window.location.href = "/home";
};

export function Search() {
  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="form">
        <input type="text" placeholder="Pesquisar..." name="search"/>
        <label>Filtros</label>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Sexo</FormLabel>
          <RadioGroup aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="both"
                      name="radio-buttons-group">
              <FormControlLabel value="female" control={<Radio />} label="F" />
              <FormControlLabel value="male" control={<Radio />} label="M" />
              <FormControlLabel value="both" control={<Radio />} label="Ambos" />
          </RadioGroup>
        </FormControl>
        <input type="text" placeholder="Idade" name="petAge"/>
        <input type="text" placeholder="Peso(kg)" name="petStartWeight"/>
        <input type="text" placeholder="até" name="petEndWeight"/>
        <input type="text" placeholder="Raça" name="petRace"/>
        <input type="text" placeholder="Cor" name="petColor"/>
        <input type="text" placeholder="Cidade" name="petLocation"/>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Categorias</FormLabel>
          <RadioGroup aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="dog"
                      name="radio-buttons-group">
              <FormControlLabel value="dog" control={<Radio />} label="Cachorro" />
              <FormControlLabel value="cat" control={<Radio />} label="Gato" />
              <FormControlLabel value="othersPets" control={<Radio />} label="Outros pets" />
          </RadioGroup>
        </FormControl>
        <label>Veja mais</label>
      </div>
    </div>
  );
}