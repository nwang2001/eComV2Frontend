import React, { useState } from 'react';

import '../css/Contact.css'
import Header2 from './Header2'
import Footer2 from './Footer2'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    number: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.firstName) {
      alert('Please enter your first name.');
      return;
    }
    if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      alert('First name should only contain letters.');
      return;
    }
    if (!formData.lastName) {
      alert('Please enter your last name.');
      return;
    }
    if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      alert('Last name should only contain letters.');
      return;
    }
    if (!formData.number) {
      alert('Please enter your phone number.');
      return;
    }
    if (!/^\d+$/.test(formData.number)) {
      alert('Phone number should only contain numbers.');
      return;
    }
    if (!formData.email) {
      alert('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!formData.message) {
      alert('Please enter a message.');
      return;
    }

    alert(`Thank you, ${formData.firstName} ${formData.lastName}, for your message!`);

    console.log('Form submitted:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      number: '',
      email: '',
      message: ''
    })
  };

  const handleClear = () => {
    setFormData({
      firstName: '',
      lastName: '',
      number: '',
      email: '',
      message: ''
    })
  }

  return (
    <div>
      <Header2 />
      <div className="contact">
        <main>
          <h1>Reach out to us!</h1>
          <form id="contact" onSubmit={handleSubmit}>
            <label htmlFor="first-name">First Name:</label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />

            <label htmlFor="last-name">Last Name:</label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />

            <label htmlFor="number">Phone Number:</label>
            <input
              type="text"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Submit</button>
            <button type="button" onClick={handleClear}>Clear</button>

          </form>
          <div className='thanks'>
        <img className="thank" src="../img/thanks.gif" alt="cat thanks gif" />
        </div>
        </main>
      </div>
      <Footer2 />
    </div>
  );
}

