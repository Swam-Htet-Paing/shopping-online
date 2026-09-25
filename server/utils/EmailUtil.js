const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
});

transporter.verify((error) => {
  if (error) {
    console.error('SMTP Connection Error:', error);
  } else {
    console.log('SMTP Server is ready to send emails.');
  }
});

// const EmailUtil = {
//   async send(email, id, token) {
//     const text = `Thank you for signing up. Please use the following credentials or link to activate your account:\n\nID: ${id}\nToken: ${token}`;
    
//     const mailOptions = {
//       from: process.env.EMAIL,
//       to: email,
//       subject: 'Account Registration Verification',
//       text: text,
//       html: `
//         <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
//           <h2 style="color: #2563eb;">Welcome to Shopping Online!</h2>
//           <p>Thank you for registering. Here are your account activation details:</p>
//           <p><b>ID:</b> ${id}</p>
//           <p><b>Token:</b> ${token}</p>
//           <hr>
//           <p style="font-size: 12px; color: #777;">Thank you for using our service.</p>
//         </div>`
//     };

//     try {
//       const info = await transporter.sendMail(mailOptions);
//       console.log('Email sent:', info.messageId);
//       return true;
//     } catch (error) {
//       console.error('Email sending failed:', error);
//       return false;
//     }
//   }
// };

// module.exports = EmailUtil;

const EmailUtil = {
  async send(email, id, token) {
    console.log(`[DEV EMAIL] Sent activation to: ${email}`);
    console.log(`[DEV EMAIL] ID: ${id} | Token: ${token}`);
    return true;
  }
};

module.exports = EmailUtil;