import type { NextPage } from "next";
import ContactForm from "../lib/components/contactForm";
import PageHeader from "../lib/components/pageHeader";
import Constants from "../lib/utility/constants";

const Contact: NextPage = () => {
  return (
    <div>
      <main>
        <PageHeader title="Contact Us"/>
        <p>{Constants.PHONE_NUMBER}</p>
        <p>{Constants.EMAIL}</p>
        <p>Available 24/7</p>
        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;
