const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// POST route to send email
app.post('/send-email', (req, res) => {
    const { nombre, email, telefono, tipo_consulta, mensaje } = req.body;

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: "pvotweb3@gmail.com",
        pass: "LaRNPV15pJOf98BG",
      },
    });

    // Email options
    let mailOptions = {
        from: "pvotweb3@gmail.com",
        to: 'pvotweb3@gmail.com', // your receiving email address
        subject: 'New Contact Form Submission',
        text: `Name: ${nombre}\nEmail: ${email}\nPhone: ${telefono}\nRequirement: ${tipo_consulta}\nMessage: ${mensaje}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
