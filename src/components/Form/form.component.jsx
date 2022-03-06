import React, { useState } from 'react';
import axios from 'axios';

import * as Styled from './form.styles';

export const Form = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method: 'POST',
      url: 'https://beaver-brothers.herokuapp.com/send',
      data: values,
    }).then((response) => {
      if (response.data.status === 'success') {
        alert('Message Sent.');
        setValues({
          name: '',
          email: '',
          message: '',
        });
      } else if (response.data.status === 'fail') {
        alert('Message failed to send.');
      }
    });
  };

  return (
    <Styled.FormBlock>
      <Styled.FormWrapper>
        <form onSubmit={handleSubmit}>
          <label className="scr-reader" htmlFor="name">
            name
          </label>
          <Styled.Input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <label className="scr-reader" htmlFor="email">
            email
          </label>
          <Styled.Input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <label className="scr-reader" htmlFor="message">
            message
          </label>
          <Styled.TextArea
            type="email"
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            placeholder="Message"
            required
          />
          <Styled.FormButtonWrapper>
            <Styled.SubmitButton value="submit">
              Send Message
            </Styled.SubmitButton>
          </Styled.FormButtonWrapper>
        </form>
        <Styled.FormSuccessMessage>
          Thank you! Your submission has been received!
        </Styled.FormSuccessMessage>
        <Styled.FormFailureMessage>
          Oops! Something went wrong while submitting the form.
        </Styled.FormFailureMessage>
      </Styled.FormWrapper>
    </Styled.FormBlock>
  );
};
