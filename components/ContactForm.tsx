import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import Button from './_ui/Button';
import dimensions from '../styles/dimensions';
import { Inner } from '../styles/structure';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const FormButton = styled(Button)`
  width: 80%;
  margin: auto;
  background: white;
`;

const FormInner = styled(Inner)`
  backdrop-filter: blur(40px);
  border: solid 2px transparent;
  background: rgba(255, 255, 255, 0.2);
  background-clip: padding-box;
  box-shadow: 1rem 1rem 1rem rgba(46, 54, 68, 0.03);
  h2 {
    padding: 3rem 0;
    color: ${colors.grey200};
    font-family: 'Zallord';
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: auto;
  grid-gap: 1rem;
  align-items: center;
  padding-bottom: 4rem;

  height: 40rem;
  flex-direction: column;
  max-width: 800px;
  margin: auto;

  & > * {
    font-size: 1.6rem;
  }

  label {
    color: black;
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    grid-template-columns: repeat(2, 1fr);
    /* padding: 6rem 11.2rem 8.2rem 7rem; */
    grid-gap: 3rem;

    .message {
      grid-column: 1 /3;
      grid-row: 2;
    }
    .email {
      grid-row: 1;
      grid-column: 2;
    }

    label {
      font-size: 1.6rem;
    }
  }
`;

const TextArea = styled.textarea`
  border: 1px solid #eee;
  padding: 1rem;
  resize: none;
  height: 10rem;
  width: 100%;
  text-indent: 1rem;
  font-size: 1.6rem;
  padding-top: 2rem;

  & + * {
    color: ${colors.teal600};
  }
  &::placeholder {
  }

  &:focus {
    border: solid ${colors.red};

    &::placeholder {
      color: transparent;
    }
  }
`;

const Input = styled.input`
  height: 6rem;
  border: 1px solid #eee;
  width: 100%;
  text-indent: 1rem;
  font-size: 1.6rem;

  & + * {
    color: ${colors.teal600};
  }

  &:focus {
    border: solid ${colors.red};

    &::placeholder {
      color: transparent;
    }
  }
`;

const StatusMessage = styled.div`
  font-size: 1.6rem;
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        name,
        email,
        message,
      }),
    })
      .then(() => setStatusMessage('Thanks for getting in touch!'))
      .catch(() =>
        setStatusMessage('Something went wrong, please try again later')
      )
      .catch(error =>
        console.error('There was a problem with the form response', error)
      )
      .finally(() => {
        setName(''), setEmail(''), setMessage('');
      });
  };

  return (
    <FormInner>
      <h2>Get in touch</h2>
      <Form
        name="contact-kahil-dev"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact-kahil-dev" />

        <div className="name">
          <Input
            name="name"
            id="name"
            placeholder="NAME"
            aria-label="fname"
            value={name}
            required={true}
            onChange={e => setName(e.target.value)}
          />
          {/* <label htmlFor="name"></label> */}
        </div>
        <div className="email">
          <Input
            name="email"
            id="email"
            aria-label="lname"
            placeholder="EMAIL"
            required={true}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="message">
          <TextArea
            name="message"
            id="message"
            placeholder="MESSAGE"
            aria-label="message"
            required={true}
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>

        <StatusMessage>{statusMessage}</StatusMessage>

        <FormButton type="submit">Submit</FormButton>
      </Form>
    </FormInner>
  );
}
