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
import { createUser, login } from "../../utils/firebase";
import { base64Resize } from "../../utils/resize";

export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const homeLogin = () => {
    window.location.href = "/home";
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    CPF: "",
    birth: "",
    password: "",
    genre: "",
    photo: "",
  });
  async function create(e: any) {
    e.preventDefault();
    console.log(formData);

    if (handleValidation(e)) {
      console.log("passou");
      let rtn = await createUser(formData.email, formData.password, formData);
      let rtnLog = login(email, password);
      
      if (rtn === rtnLog) {
        //console.log(" SIMSIMSIMSIMSIMSIMS");
        homeLogin();
      }
    }
  }

  function handleChange(e: any) {
    e.preventDefault();

    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleFileChange(evt: any) {
    evt.preventDefault();
    let files = evt.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      base64Resize(e.target!.result, 0.4, (cb: any) => {
        setFormData({ ...formData, [evt.target.name]: cb });
      });
    };
    console.log(formData);
  }
  const [erros, setErrors] = useState("");

function handleValidation(e: any) {
    e.preventDefault();
    let formIsValid = true;
    setErrors("");

    if (typeof formData.CPF !== "undefined") {
      if (!TestaCPF(formData.CPF)) {
        formIsValid = false;
        setErrors("CPF inválido!");
      }
    }

    if (typeof formData.email !== "undefined") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        formIsValid = false;
        setErrors("Email inválido!");
      }
    }

    return formIsValid;
  }

  function TestaCPF(strCPF: any): boolean {
    if (typeof strCPF !== "string") {
      return false;
    }

    strCPF = strCPF.replace(/[^\d]/g, "");

    if (strCPF === "00000000000" || strCPF.length !== 11) {
      return false;
    }

    if (!validaPrimeiroDigito(strCPF) || !validaSegundoDigito(strCPF)) {
      return false;
    }

    return true;
  }

  function validaPrimeiroDigito(strCPF: string): boolean {
    const soma = strCPF
      .slice(0, 9)
      .split("")
      .reduce((total, num, i) => total + parseInt(num) * (10 - i), 0);

    const resto = (soma * 10) % 11;

    return (
      resto === parseInt(strCPF.charAt(9)) ||
      (resto === 10 && strCPF.charAt(9) === "0")
    );
  }

  function validaSegundoDigito(strCPF: string): boolean {
    const soma = strCPF
      .slice(0, 10)
      .split("")
      .reduce((total, num, i) => total + parseInt(num) * (11 - i), 0);

    const resto = (soma * 10) % 11;

    return (
      resto === parseInt(strCPF.charAt(10)) ||
      (resto === 10 && strCPF.charAt(10) === "0")
    );
  }

  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <form className="form" onSubmit={(e) => create(e)}>
        <label className="label">Nome</label>
        <input
          type="text"
          placeholder="Nome"
          value={formData.name}
          name="name"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="label">Email</label>
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          name="email"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="label">Telefone</label>
        <input
          type="text"
          placeholder="Telefone"
          value={formData.tel}
          name="tel"
          onChange={(e) => handleChange(e)}
          required
        />
        <div>
        <label className="label">CPF</label>
          <input
            type="text"
            placeholder="CPF"
            value={formData.CPF}
            name="CPF"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <span>{erros}</span>
        <label className="label">Data de Nascimento</label>
        <input
          type="text"
          placeholder="Data de Nascimento"
          value={formData.birth}
          name="birth"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="label">Senha</label>
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
              value="other"
              control={<Radio />}
              label="Outro"
              onChange={(e) => handleChange(e)}
            />
          </RadioGroup>
        </FormControl>
        <label className="label">Foto de Perfil</label>
        <input
          type="file"
          placeholder="Foto de Perfil"
          name="photo"
          onChange={(e) => handleFileChange(e)}
        />
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
