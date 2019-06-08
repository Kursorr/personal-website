const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// CORS
const options = {
  'origin': true,
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
}

app.use(cors(options))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

function validateEmail(email) {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

app.post('/contact', async (req, res) => {
  console.log(req, res)
  console.log(req.body)
  res.status(200).json(req.body)

  /*
  .post(function (req, res) {
        req.on('data', function(data) {
            const datas = JSON.parse(data);

            if(validateEmail(datas.email) && datas.nameAndSurname && datas.message && datas.captcha) {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: personnalData.user,
                        pass: personnalData.pass
                    }
                });

                const mailOptions = {
                    from: datas.email,
                    to: personnalData.user,
                    subject: '',
                    html: datas.message
                };

                transporter.sendMail(mailOptions, function(err, info) {
                   if(err) console.log(err);
                   else {
                       res.status(200).json({
                           message: 'Votre message est bien envoyé.'
                       });
                   }
                });
            } else {
                res.status(400).json({
                    message: 'Des erreures sont présentes dans le formulaire.'
                });
            }
        })
    })
   */
})

app.listen(3000)
