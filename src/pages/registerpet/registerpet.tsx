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
import { useState, useEffect } from "react";
import { authValidate, redirect } from "../../utils/utils";
import { writeData } from "../../utils/firebase";
import { PETS_COLLECTION } from "../../utils/constants";

export function Registerpet() {
  
  useEffect(() => {
    if(!authValidate()) redirect("/")
  })

  const homeLogin = () => {
    window.location.href = "/home";
  };
  
  const [formData, setFormData] = useState({
    petName: "",
    petRace: "",
    petLocation: "",
    petColor: "",
    petWeight: "",
    petAge: "",
    petInfo: "",
    petOptions: "",
    petSexOptions: "",
    petPic:null
  });
  
  const[erros, setErrors] = useState('');
  
  function handleChange(e: any) {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleFileChange(evt:any){
    evt.preventDefault();
      let files = evt.target.files;
      let reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (e) => {
        console.log('image data: ', e.target!.result);
        setFormData({ ...formData, [evt.target.name]: e.target!.result });
      };
      
      // setSelectedFile(e.target.value);
      console.log(formData);
    }
  

  function persistData() {
    writeData(PETS_COLLECTION, formData)
  }
  
  function handleValidation(e:any) {
    e.preventDefault();
    let formIsValid = true;
    setErrors("");
  
    if(typeof formData.petAge !== "undefined") {
      if(!formData.petAge.match(/^[0-9]+$/)) {
        formIsValid = false;
        setErrors("No campo Idade somente números é permitido");
      }
    }
  
    if(typeof formData.petWeight !== "undefined") {
      if(!formData.petWeight.match(/^[0-9]+$/)) {
        formIsValid = false;
        setErrors("No campo Peso somente números é permitido");
      }
    }

    if(formIsValid) {
      //homeLogin();
      persistData()
     
      
      //convertBase64(formData.petPic)
    }
  
  }

  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <form className="form" onSubmit={(e) => handleValidation(e)}>
        <FormControl>
          <RadioGroup aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="dog"
                      name="petOptions"
                      onChange={(e) => handleChange(e)}>
              <FormControlLabel value="dog" control={<Radio />} label="Cachorro" />
              <FormControlLabel value="cat" control={<Radio />} label="Gato" />
              <FormControlLabel value="othersPets" control={<Radio />} label="Outros pets" />
          </RadioGroup>
        </FormControl>
          <input type="text" placeholder="Nome" name="petName" onChange={(e) => handleChange(e)} required/>
          <input type="text" placeholder="Raça" name="petRace" onChange={(e) => handleChange(e)} required/>
          <input type="text" placeholder="Localização" name="petLocation" onChange={(e) => handleChange(e)} required/>
          <input type="text" placeholder="Cor" name="petColor" onChange={(e) => handleChange(e)} required/>
          <input type="text" placeholder="Peso" name="petWeight" onChange={(e) => handleChange(e)} required/>
          <input type="text" placeholder="Idade" name="petAge" onChange={(e) => handleChange(e)} required/>
          <input type="text" placeholder="Fale algo sobre o PET" name="petInfo" onChange={(e) => handleChange(e)} />
        
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Sexo</FormLabel>
          <RadioGroup aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="petSexOptions"
                      onChange={(e) => handleChange(e)}>
              <FormControlLabel value="female" control={<Radio />} label="F" />
              <FormControlLabel value="male" control={<Radio />} label="M" />
          </RadioGroup>
        </FormControl>
        <input type="file" placeholder="Foto do Pet" name="petPic" onChange={(e) => handleFileChange(e)}/>
        <span>{erros}</span>
        <button >Cadastrar o PET</button>
      </form>
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