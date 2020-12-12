module.exports = {
  ROLE: {
    ADMIN: "ADMIN",
    USER: "USER",
  },
  EMAIL_TYPE: {
    VERIFY_USER: "VERIFY_USER",
  },
  MONGO_URI:
    process.env.MONGO_URI || "mongodb://localhost:27017/mern_boilerplate",
  FRONTEND_URI: process.env.FRONTEND_URI || "http://localhost:3000",
  SECRET_KEY_JWT: "some thing secret",
  VERIFY_USER_PREFIX: "VERIFY_USER_PREFIX",
  FORGOT_PASSWORD_PREFIX: "FORGOT_PASSWORD_PREFIX",
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
  REDIS_PASS: process.env.REDIS_PASS,
  MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
  MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN,
};
