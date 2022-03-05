import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import SendEmail from '../services/emailService';


const ContactForm = (props: any)  => {
  const [nameValue, setNameValue] = useState<string>("");
  const [phoneValue, setPhoneValue] = useState<string>("");
  const [messageValue, setMessageValue] = useState<string>("");
  const submitForm = async (e: any) => {
    e.preventDefault();
    const data = {
      name: nameValue,
      phone: phoneValue,
      message: messageValue
    }
    const emailSent = await SendEmail(data);
    console.log(emailSent);
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
        onChange={(e: any) => setNameValue(e.target.value)}
      />
      <TextField
        id="phone-input"
        label="Phone Number"
        type="text"
        autoComplete="phone"
        variant="standard"
        onChange={(e: any) => setPhoneValue(e.target.value)}
      />
       <TextField
        id="phone-input"
        label="Message"
        type="text"
        variant="standard"
        onChange={(e: any) => setMessageValue(e.target.value)}
      />
       <Button 
       disabled={!nameValue || !phoneValue || !messageValue} 
       type="submit" variant="contained" className="contact-submit-button">
          Submit
        </Button>
  </Box>
  );
};

export default ContactForm;
