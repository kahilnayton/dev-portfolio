import React from 'react';
// import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
// import RichText from '../components/RichText';
import ContactForm from '../components/ContactForm';

const ContactFormContainer = styled.div`
  padding: 5rem 0;
`;

const Contact = props => {
  return (
    <Layout>
      <ContactFormContainer>
        
        <ContactForm />
      </ContactFormContainer>
    </Layout>
  );
};

export default Contact;
