const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' })



app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json());
// app.use(bodyParser.json({limit: "50mb"}));
// app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.post('/sendFormData',  upload.single('profile'),(req, res) => {
  console.log(req.body, 'data of form');
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: 'true',
    port: '465',
    auth: {
      user: 'karkibimal0@gmail.com', // must be Gmail
      pass: 'boomboom3669'
    }
  });

  var mailOptions = {
    from: 'karkibimal0@gmail.com',
    to: 'karkibimal080@gmail.com', // must be Gmail
    cc:`${req.body.name} <${req.body.email}>`,
    subject: 'Sending Email using Node.js',
    html: `
            <table style="width: 100%; border: none">
              <thead>
                <tr style="background-color: #000; color: #fff;">
                  <th style="padding: 10px 0">Name</th>
                  <th style="padding: 10px 0">E-mail</th>
                  <th style="padding: 10px 0">Message</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style="text-align: center">${req.body.name}</th>
                  <td style="text-align: center">${req.body.email}</td>
                  <td style="text-align: center">${req.body.message}</td>

                </tr>
              </tbody>
            </table>
          `,
    
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({
        message: 'successfuly sent!'
      })
    }
  });

});

app.listen(3000, () => {
  console.log("server run!!!");
});