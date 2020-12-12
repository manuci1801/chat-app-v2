const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");

const { EMAIL_TYPE } = require("../config/keys");

const auth = {
  auth: {
    api_key: "16478ec8e5c3c944356d386be564c1e3-4879ff27-a89f9dcb",
    domain: "sandbox2d526551c78a432ca1e088a575c4cebd.mailgun.org",
  },
};

const transporter = nodemailer.createTransport(mg(auth));

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

  await transporter.sendMail({
    from: "manuci1801@gmail.com",
    to,
    subject,
    html: htmlBody,
  });
};

module.exports = {
  sendMail,
};
