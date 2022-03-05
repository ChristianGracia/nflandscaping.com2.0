import React from "react";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";


const ContactForm = (props: any)  => {
  const submitForm = (e: any) => {
    e.preventDefault();
    console.log(e)
  }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      display="flex" flexDirection="column" alignItems="center"
      onSubmit={submitForm}
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
       <Button type="submit" variant="contained" className="contact-submit-button">
          Submit
        </Button>
  </Box>
  );
};

export default ContactForm;
