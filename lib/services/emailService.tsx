import Constants from "../utility/constants";

interface EmailBodyProps {
  name: string;
  phone: string;
  message: string;
}

const sendEmail = async (emailBody: EmailBodyProps) => {
    console.log(emailBody)
  const response = await fetch(`${Constants.LOCAL_API_URL}email/send-email-nfl`, {
    method: "POST",
    body: JSON.stringify(emailBody),
  });
  return response.json();
};
export default sendEmail;
