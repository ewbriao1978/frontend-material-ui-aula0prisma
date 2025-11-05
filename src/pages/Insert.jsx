import React from "react";
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";


const Insert = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [salario, setSalario] = useState('');


    return (
        <>
        <div style={{ padding: 1 }}>
            <h1>Inserir dados</h1>
    <Box sx={{  alignItems: 'center', '& > :not(style)': { m: 2 } }}>
      <TextField
        helperText="Entre com seu nome"
        id="demo-helper-text-misaligned"
        label="Nome"
        onChange={(e)=>setNome(e.target.value)}

      />
       <TextField
        helperText="Entre com seu e-mail"
        id="demo-helper-text-misaligned"
        label="E-mail"
        onChange={(e)=>setEmail(e.target.value)}
      />
       <TextField
        helperText="Entre com seu salário"
        id="demo-helper-text-misaligned"
        label="Salário"
        onChange={(e)=>setSalario(e.target.value)}
      />
      <Button variant="contained" >Cadastrar</Button>
    </Box>

            
        </div>
        </>
    );
};

export default Insert