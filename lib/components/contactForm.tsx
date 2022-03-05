import React from "react";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';


const ContactForm = (props: any)  => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      display="flex" flexDirection="column" alignItems="center" 
    >
      <TextField
        id="name-input"
        label="Name"
        type="text"
        autoComplete="name"
        variant="standard"
      />
      <TextField
        id="phone-input"
        label="Phone Number"
        type="text"
        autoComplete="phone"
        variant="standard"
      />
       <TextField
        id="phone-input"
        label="Message"
        type="text"
        variant="standard"
      />
  </Box>
  );
};

export default ContactForm;
