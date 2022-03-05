import Constants from "../utility/constants";

interface EmailBodyProps {
  name: string;
  phone: string;
  message: string;
}

const sendEmail = async (emailBody: EmailBodyProps) => {
  const response = await fetch(`${Constants.PROD_API_URL}email/send-email-nfl`, {
    method: "POST",
    body: JSON.stringify(emailBody),
    headers: {
        'Content-Type': 'application/json'
    },
  });
  return response;
};
export default sendEmail;
