import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import {
  Form,
  Input,
  Item,
  Title,
  TextArea,
  Btn,
  Select,
  Option,
} from './style';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_vfmgarv',
        'template_0pgr4wj',
        form.current,
        'user_pywPsnKY1q8czlk9MyD56'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <Title>Send Email FDCMOVE</Title>
      <Item>Name</Item>
      <Input type='text' name='names' />
      <Item>Surname</Item>
      <Input type='text' name='surNames' />
      <Item>Age</Item>
      <Input type='number' name='age' />
      <Item>Kursni tanglang</Item>
      <Select type='text' name='kurs'>
        <Option value=''></Option>
        <Option value=''>Frontend</Option>
        <Option value=''>Bekend</Option>
        <Option value=''>Mobile</Option>
        <Option value=''>Design</Option>
      </Select>
      <Item>Izoh qoldiring</Item>
      <TextArea name='message' />
      <Btn type='submit' value='Send' />
    </Form>
  );
};

export default ContactUs;
