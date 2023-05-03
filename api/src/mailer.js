const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.ipage.com',
  port: 587,
  secure: false,
  auth: {
    user: 'ESAT@airtechone.com',
    pass: 'h5wtUXe#DZd@o@d7'
  },
  tls: {
    rejectUnauthorized: false
  }
});

module.exports = transporter;