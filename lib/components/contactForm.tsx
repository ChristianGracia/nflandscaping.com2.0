import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import SendEmail from "../services/emailService";
import { CONTACT_TEXT } from "../utility/constants";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
const ContactForm = (props: any) => {
  const [nameValue, setNameValue] = useState<string>("");
  const [phoneValue, setPhoneValue] = useState<string>("");
  const [messageValue, setMessageValue] = useState<string>("");
  const [autoFocus, setAutoFocus] = useState<number[]>([0, 0, 0]);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formError, setFormError] = useState<boolean>(false);
  const submitForm = async (e: any) => {
    e.preventDefault();
    const data = {
      name: nameValue,
      phone: phoneValue,
      message: messageValue,
    };
    const submitted = await SendEmail(data);

    if (submitted.status === 204) {
      setFormSubmitted(true);
    } else {
      setFormError(true);
    }
  };

  const StyledContainer = styled.div(``);

  const handleChange = (e: any) => {
    e.preventDefault();
    const value = e.target.value;
    if (e.target.id === "name-input") {
      setNameValue(value);
      setAutoFocus([1, 0, 0]);
    } else if (e.target.id === "phone-input") {
      setPhoneValue(value);
      setAutoFocus([0, 1, 0]);
    } else if (e.target.id === "message-input") {
      setMessageValue(value);
      setAutoFocus([0, 0, 1]);
    }
  };

  const renderTextInput = () => {
    interface FormProps {
      id: string;
      label: string;
      type: string;
      value: string;
    }
    const formObjArr: FormProps[] = [
      {
        id: "name-input",
        label: "Name",
        type: "text",
        value: nameValue,
      },
      {
        id: "phone-input",
        label: "Phone Numbe",
        type: "phone",
        value: phoneValue,
      },
      {
        id: "message-input",
        label: "Message",
        type: "text",
        value: messageValue,
      },
    ];
    return (
      <StyledContainer>
        <Typography component="p">{CONTACT_TEXT.ESTIMATE_TEXT}</Typography>
        <Box display="flex" flexDirection="column" alignItems="center">
          {formObjArr.map((item: FormProps, index: number) => {
            return (
              <TextField
                autoFocus={autoFocus[index]}
                key={index}
                id={item.id}
                label={item.label}
                type={item.type}
                variant="standard"
                value={item.value}
                onChange={handleChange}
              />
            );
          })}
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ m: 3 }}
        >
          <Button
            disabled={!nameValue || !phoneValue || !messageValue}
            type="submit"
            variant="contained"
            className="contact-submit-button"
          >
            Submit
          </Button>
        </Box>
      </StyledContainer>
    );
  };

  const renderErrorMessage = () => {
    return <Alert severity="error">Error sending message</Alert>;
  };

  const renderSuccessMessage = () => {
    return <Alert severity="success">Message Received!</Alert>;
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      display="flex"
      flexDirection="column"
      alignItems="center"
      onSubmit={submitForm}
    >
      {!formSubmitted
        ? renderTextInput()
        : formError
        ? renderErrorMessage()
        : renderSuccessMessage()}
    </Box>
  );
};

export default ContactForm;
