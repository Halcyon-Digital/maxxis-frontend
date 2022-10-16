import React from "react";
import ContactInfo from "../components/ContactInfo";
import TabItem from "../components/TabItem";
import Layout from "../shared/Layout";

function ContactPage() {
  return (
    <Layout>
      <TabItem />
      <ContactInfo />
    </Layout>
  );
}

export default ContactPage;
