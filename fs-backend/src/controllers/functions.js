console.log(process.env.MAILGUN_API_KEY)
const mailgun = require('mailgun-js')({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAN,
    proxy: process.env.PROXY
});
import jwt from 'jsonwebtoken';
import constants from '../controllers/constant';
module.exports = {
    sendResponse(res, status, message, data) {
        res.status(status).send({
            status: status,
            message: message,
            data: data
        });
    },

    SendMail(from, to, subject, text) {
        let data = {
            from: from,
            to: to,
            subject: subject,
            text: text
        };
        mailgun.messages().send(data, (error, body) => {
            if (error) {
                console.log(error);
            } else {
                console.log(body);
            }
        });
    },
  


};