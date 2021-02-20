const nodemailer = require("nodemailer");

const { EMAIL_TYPE, EMAIL_USER, EMAIL_PASS } = require("../config/keys");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
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
