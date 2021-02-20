module.exports = {
  ROLE: {
    ADMIN: "ADMIN",
    USER: "USER",
  },
  CONTACT_STATUS: {
    PENDING: "PENDING",
    CONFIRM: "CONFIRM",
  },
  ROOM_TYPE: {
    PRIVATE: "PRIVATE",
    GROUP: "GROUP",
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
  SOCKET_PREFIX: "SOCKET_PREFIX",
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
  REDIS_PASS: process.env.REDIS_PASS,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
};
