import "./registerpet.css";
import Logo from "../../assets/AdoteUmPet.svg";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const homeLogin = () => {
  window.location.href = "/home";
};

export function Registerpet() {
  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="form">
        <FormControl>
          <RadioGroup aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="dog"
                      name="radio-buttons-group">
              <FormControlLabel value="dog" control={<Radio />} label="Cachorro" />
              <FormControlLabel value="cat" control={<Radio />} label="Gato" />
              <FormControlLabel value="othersPets" control={<Radio />} label="Outros pets" />
          </RadioGroup>
        </FormControl>
          <input type="text" placeholder="Nome" name="petName"/>
          <input type="text" placeholder="Raça" name="petRace"/>
          <input type="text" placeholder="Localização" name="petLocation"/>
          <input type="text" placeholder="Peso" name="petWeight"/>
          <input type="text" placeholder="Idade" name="petAge"/>
          <input type="text" placeholder="Fale algo sobre o PET" name="petInfo"/>
        
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Sexo</FormLabel>
          <RadioGroup aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group">
              <FormControlLabel value="female" control={<Radio />} label="F" />
              <FormControlLabel value="male" control={<Radio />} label="M" />
          </RadioGroup>
        </FormControl>
        <input type="file" placeholder="Foto do Pet" name="petPic"/>
        <button onClick={homeLogin}>Cadastrar o PET</button>
      </div>
    </div>
  );
}


export default function UploadButtons() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
    </Stack>
  );
}