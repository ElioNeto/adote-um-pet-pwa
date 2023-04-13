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

export function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    cpf: "",
    birth: "",
    password: "",
    genre: "",
    photo: "",
  });
  
  function handleSubmit(e: any) {
    e.preventDefault();
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.user));
  }

  function handleChange(e: any) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Nome"
          value={formData.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={formData.tel}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="CPF"
          value={formData.cpf}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Data de Nascimento"
          value={formData.birth}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={formData.password}
          onChange={(e) => handleChange(e)}
        />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gênero</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            className="radio-button"
          >
            <FormControlLabel value="female" control={<Radio />} label="F" />
            <FormControlLabel value="male" control={<Radio />} label="M" />
            <FormControlLabel value="other" control={<Radio />} label="Outro" />
          </RadioGroup>
        </FormControl>
        <input type="file" placeholder="Foto de Perfil" name="profilePic" />
        <button onClick={() => {redirect("/home")}}>Cadastrar</button>
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
