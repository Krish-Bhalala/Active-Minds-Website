const express = require('express');
const path = require('path');
const app = express();
const nodemailer = require('nodemailer');

const PORT=  process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact_us.html'));
});
app.post('/', (req, res) => {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'jadyn79@ethereal.email',
        pass: '4GP1RmSkHavH3nKX56'
    }
});
    const mailOptions = {
      from: req.body.email,
      to: 'jadyn79@ethereal.email',
      subject: `Message from ${req.body.email}: ${req.body.subject}`,
      text: req.body.message
    }
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.send('error');
      } else {
        console.log('Email sent: ' + info.response);
        res.send('success');
      }
  
  });

});
app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});