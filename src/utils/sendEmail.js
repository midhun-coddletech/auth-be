// utils/sendEmail.js

require('dotenv').config(); // Load environment variables

const mg = require('../../config/mailGunClient'); 

const sendEmail = async (to, subject, text, html) => {
  try {
    const response = await mg.messages.create(process.env.MAILGUN_DOMAIN, { // Use your Mailgun domain
      from: process.env.MAILGUN_FROM_EMAIL, 
      to, // recipient address
      subject, // subject line
      text, // plain text body
      html, // HTML body (optional)
    });
    
    console.log('Email sent:', response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
