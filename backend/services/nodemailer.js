const nodemailer = require("nodemailer");

const { EMAIL_TYPE, MAILGUN_USER, MAILGUN_PASS } = require("../config/keys");

const transporter = nodemailer.createTransport({
  host: "smtp.mailgun.org",
  port: 587,
  secure: false,
  auth: {
    user: MAILGUN_USER,
    pass: MAILGUN_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendMail = async (to, subject, data, type) => {
  let htmlBody;
  switch (type) {
    case EMAIL_TYPE.VERIFY_USER:
      htmlBody = `<b>Verify user: ${data}</b>`;
      break;

    default:
      break;
    //   return;
  }

  const emailContent = {
    from: "Support@manuci.tk",
    to,
    subject,
    html: htmlBody,
  };

  const res = await transporter.sendMail(emailContent);
  console.log(res);
};

module.exports = {
  sendMail,
};
