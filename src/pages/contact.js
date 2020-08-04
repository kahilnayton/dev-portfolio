import React from 'react';
// import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import ContactForm from '../components/ContactForm';

const ContactFormContainer = styled.div`
  padding: 5rem 0;
  background: ${colors.blue};
  height: calc(100vh - 12rem);
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
