import React, { Component } from 'react';
import styled from '@emotion/styled';
import colors from '../styles/colors';
import Button from '../components/_ui/Button';
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
  h2 {
    padding-bottom: 3rem;
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
  padding: 4rem 2rem 8.2rem 2rem;

  height: 40rem;
  flex-direction: column;
  background-color: ${colors.grey200};
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
    padding: 6rem 11.2rem 8.2rem 7rem;
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
  resize: none;
  height: 10rem;
  width: 100%;
  text-indent: 1rem;

  & + * {
    color: ${colors.teal600};
  }
  &::placeholder {
    padding-top: 2rem;
  }
`;

const Input = styled.input`
  height: 6rem;
  border: 1px solid #eee;
  width: 100%;
  text-indent: 1rem;

  & + * {
    color: ${colors.teal600};
  }
`;

const StatusMessage = styled.div`
  font-size: 1.6rem;
`;

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() =>
        this.setState({
          statusMessage: 'Thanks for getting in touch!',
        })
      )
      .catch(() =>
        this.setState({
          statusMessage: 'Something went wrong, please try again later',
        })
      )
      .catch(error =>
        console.error('There was a problem with the form response', error)
      )
      .then(() =>
        console.log('%c Netlify Forms and Mailchimp data sent', 'color: green')
      )
      .finally(() =>
        this.setState({
          name: [],
          email: [],
          message: [],
        })
      );
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message, statusMessage } = this.state;

    return (
      <FormInner>
        <h2>Get in touch</h2>
        <Form
          name="contact-kahil-dev"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact-kahil-dev" />

          <div className="name">
            <Input
              name="name"
              id="name"
              placeholder="NAME"
              value={name}
              required={true}
              onChange={this.handleChange}
            />
            <label htmlFor="name"></label>
          </div>
          <div className="email">
            <Input
              name="email"
              id="email"
              placeholder="EMAIL"
              required={true}
              value={email}
              onChange={this.handleChange}
            />
            <label htmlFor="email"></label>
          </div>
          <div className="message">
            <TextArea
              name="message"
              id="message"
              placeholder="MESSAGE"
              required={true}
              value={message}
              onChange={this.handleChange}
            />
            <label htmlFor="message"></label>
          </div>

          <StatusMessage>{statusMessage}</StatusMessage>

          <FormButton type="submit">Submit</FormButton>
        </Form>
      </FormInner>
    );
  }
}
