import "./signup.css";
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

export function Signup() {
  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="form">
        <input type="text" placeholder="Nome" name="name"/>
        <input type="text" placeholder="Email" name="email"/>
        <input type="text" placeholder="Telefone" name="telephone"/>
        <input type="text" placeholder="CPF" name="cpf"/>
        <input type="text" placeholder="Data de Nascimento" name="birthdate"/>
        <input type="password" placeholder="Senha" name="password"/>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gênero</FormLabel>
          <RadioGroup aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group" className="radio-button">
              <FormControlLabel value="female" control={<Radio />} label="F" />
              <FormControlLabel value="male" control={<Radio />} label="M" />
              <FormControlLabel value="other" control={<Radio />} label="Outro" />
          </RadioGroup>
        </FormControl>
        <input type="file" placeholder="Foto de Perfil" name="profilePic"/>
        <button onClick={homeLogin}>Cadastrar</button>
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