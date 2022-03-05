import Constants from "../utility/constants";

interface EmailBodyProps {
    name: string,
    phone: string,
    message: string
}

const sendEmail = async (emailBody: EmailBodyProps) => {
    const response = await fetch(`${Constants.API_URL}email/send-email-nfl`, {
        method: 'POST',
        body: JSON.stringify(emailBody) 
    });
    return response.json()
}
export default sendEmail;