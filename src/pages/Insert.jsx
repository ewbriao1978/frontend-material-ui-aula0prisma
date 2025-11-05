import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const Insert = () => {
    return (
        <>
        <div style={{ padding: 1 }}>
            <h1>Inserir dados</h1>
    <Box sx={{  alignItems: 'center', '& > :not(style)': { m: 1 } }}>
      <TextField
        helperText="Entre com seu nome"
        id="demo-helper-text-misaligned"
        label="Nome"
      />
       <TextField
        helperText="Entre com seu e-mail"
        id="demo-helper-text-misaligned"
        label="E-mail"
      />
       <TextField
        helperText="Entre com seu salário"
        id="demo-helper-text-misaligned"
        label="Salário"
      />
    </Box>

            
        </div>
        </>
    );
};

export default Insert