
import Layout from '../components/Layout';
import styled from 'styled-components';
import colors from '../styles/colors';
import ContactForm from '../components/ContactForm';

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
