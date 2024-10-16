import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";
import Head from "next/head";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Contact Jakub via email." />
      </Head>
      <h1 style={{ padding: "24px" }}>Contact</h1>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
