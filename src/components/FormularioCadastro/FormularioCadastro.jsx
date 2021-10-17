import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({aoEnviar, validarCPF}) {
  const [nome, setNome] = useState("");
  const [cafe, setCafe] = useState("");
  const [cpf, setCpf] = useState("");
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}})
  const [listaDeCafe, setListaDeCafe] = useState([]);
  function listinha(){
    setNome("")
    setCafe("")
    setCpf("")
  }
  return (
    <>
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setListaDeCafe([...listaDeCafe,{nome:nome, cafe:cafe, cpf:cpf}])
        aoEnviar({nome, cafe: cafe, cpf});
        listinha()
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cafe}
        onChange={(event) => {
          setCafe(event.target.value);
        }}
        id="Café"
        label="Café"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}

        onBlur={(event)=>{
          const ehValido = validarCPF(cpf);
          setErros({cpf:ehValido})
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
    {listaDeCafe.map((cafe)=>{
      return <ul>
        <li>{cafe.nome}</li>
        <li>{cafe.cafe}</li>
        <li>{cafe.cpf}</li>
      </ul>
    })}
    </>
  );
}

export default FormularioCadastro;
