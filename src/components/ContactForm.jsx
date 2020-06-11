import React, { Component } from 'react';
import styled from '@emotion/styled';
import colors from '../styles/colors';
import Button from '../components/_ui/Button';
import dimensions from '../styles/dimensions';

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

const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: auto;
  grid-gap: 2rem;
  align-items: center;
  padding: 6.9rem 2rem 8.2rem 2rem;

  height: 100%;
  flex-direction: column;
  background-color: ${colors.grey200};
  max-width: 800px;
  margin: auto;

  & > * {
    font-size: 1.6rem;
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 6.9rem 11.2rem 8.2rem 7rem;
    grid-gap: 3rem;

    .message {
      grid-column: 1 /3;
      grid-row: 4;
      
      text-area {
        height: 164rem;
      }

    }
    .email {
      grid-row: 2;
      grid-column: 1 / 3;
    }

    label {
      font-size: 1.6rem;
    }
  }
`;


const EmailInput = styled.input`
  margin-bottom: 1rem;
  height: 6rem;
  border: 1px solid #eee;
  width: 100%;

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    grid-column: 1/3;
  }

  & + * {
    color: ${colors.teal600};
  }
`;

const TextArea = styled.textarea`
  border: 1px solid #eee;
  resize: none;
  height: 10rem;
  width: 100%;

  input { 
    border: solid;
  }

  & + * {
    color: ${colors.teal600};
  }
`;

const Input = styled.input`
  height: 6rem;
  border: 1px solid #eee;
  width: 100%;

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
      firstName: '',
      lastName: '',
      email: '',
      organization: '',
      title: '',
      message: '',
      MailChimpResult: '',
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
          statusMessage: 'Thanks you for contacting us!',
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
      .then(() => console.log('%c Netlify Forms and Mailchimp data sent', 'color: green'))
      .finally(() =>
        this.setState({
          firstName: [],
          lastName: [],
          email: [],
          organization: [],
          message: [],
        })
      );
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const {
      firstName,
      lastName,
      email,
      organization,
      title,
      message,
      statusMessage,
    } = this.state;

    return (
      <>
        <Form
          name="contact-leading-edge"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact-leading-edge" />

          <div className="first-name">
            <Input
              name="firstName"
              id="firstName"
              value={firstName}
              required={true}
              onChange={this.handleChange}
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="last-name">
            <Input
              name="lastName"
              id="lastName"
              required={true}
              value={lastName}
              onChange={this.handleChange}
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="email">
            <EmailInput
              name="email"
              id="email"
              required={true}
              value={email}
              onChange={this.handleChange}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="organization">
            <Input
              name="organization"
              id="organization"
              required={false}
              value={organization}
              onChange={this.handleChange}
            />
            <label htmlFor="organization">Organization</label>
          </div>
          <div className="message">
            <TextArea
              name="message"
              id="message"
              required={false}
              value={message}
              onChange={this.handleChange}
            />
            <label htmlFor="message">Message</label>
          </div>

          {/* <SignMeUp>Contact</SignMeUp> */}

          <StatusMessage>{statusMessage}</StatusMessage>

          <FormButton type="submit"> Join the Community</FormButton>
        </Form>
      </>
    );
  }
}
