import "./signup.css";
import Logo from "../../assets/AdoteUmPet.svg";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { redirect } from "../../utils/utils";
import { createUser } from "../../utils/firebase";
import { base64Resize } from "../../utils/resize";

export function Signup() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    cpf: "",
    birth: "",
    password: "",
    genre: "",
    photo:"",
  });
  async function create(e:any){
    e.preventDefault();
    console.log(formData);
    
  await createUser(formData.email, formData.password, formData)
     
    
  }

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
        //console.log('image data: ', e.target!.result);
       base64Resize(e.target!.result, 0.4, (cb:any) => {
        //console.log(cb, "resized");

        setFormData({ ...formData, [evt.target.name]: cb });
    

      })
          
      
        
      };
      
      // setSelectedFile(e.target.value);
      console.log(formData);
    }

  //TODO: https://codesandbox.io/s/convert-file-to-base64-in-react-lqi1e

  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <form className="form" onSubmit={(e) => create(e)}>
        <input
          type="text"
          placeholder="Nome"
          value={formData.name}
          name="name"
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          name="email"
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="text"
          placeholder="Telefone"
          value={formData.tel}
          name="tel"
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="text"
          placeholder="CPF"
          value={formData.cpf}
          name="cpf"
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="text"
          placeholder="Data de Nascimento"
          value={formData.birth}
          name="birth"
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={formData.password}
          name="password"
          onChange={(e) => handleChange(e)}
          required
        />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gênero</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="genre"
            className="radio-button"
            onChange={(e) => handleChange(e)}
          >
            <FormControlLabel value="female" control={<Radio />} label="F" onChange={(e) => handleChange(e)}/>
            <FormControlLabel value="male" control={<Radio />} label="M" onChange={(e) => handleChange(e)}/>
            <FormControlLabel value="other" control={<Radio />} label="Outro" onChange={(e) => handleChange(e)} />
          </RadioGroup>
        </FormControl>
        <input type="file" placeholder="Foto de Perfil" name="photo" onChange={(e)=>handleFileChange(e)}/>
        <button type="submit">Cadastrar</button>
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
