import React from 'react';
// import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import ContactForm from '../components/ContactForm';
import { jsPDF } from 'jspdf';

const doc = new jsPDF();

doc.text = 'hello world';
doc.save('a4.pdf');

const ContactFormContainer = styled.div`
  padding: 5rem 0;
  background: ${colors.blue};
  height: 100%;
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
