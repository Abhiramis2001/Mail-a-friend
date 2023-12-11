const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables from a .env file

// Create a transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Define the email content
const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'abhirami_email@example.com',
    subject: 'Test Email with Attachments',
    text: 'Hello, this is a test email!',
    html: '<p>Hello, this is a test email with HTML content!</p>',
    attachments: [
        {
            filename: 'attachment.txt',
            content: 'This is an attachment file.'
        }
    ]
};

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.error(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
