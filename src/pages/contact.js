import React from 'react';
// import { graphql } from 'gatsby';
import Layout from '../components/Layout';
// import styled from 'styled-components';
// import RichText from '../components/RichText';
import ContactForm from '../components/ContactForm'

const Contact = props => {
  console.log(props);
  return (
    <Layout>
      <ContactForm/>
    </Layout>
  );
};

export default Contact;
