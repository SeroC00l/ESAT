const transporter = require('../mailer');


// Función para enviar el correo de restablecimiento de contraseña
async function sendResetPasswordEmail(email, resetToken) {
  const mailOptions = {
    from: 'ESAT@airtechone.com',
    to: email,
    subject: 'Password Reset',
    html: `
      <h1>Reset your </h1>
      <p>To reset your password click the following link</p>
      <a href="http://192.168.77.10/reset-password/${resetToken}">Reset password</a>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
        // Mail sent successfully
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}