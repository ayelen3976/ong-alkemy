const jwt = require("jsonwebtoken");
const secret_key = process.env.SECRET_KEY;

module.exports = function verifyToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({
      ok: false,
      message: "Token not provided.",
    });
  }
  try {
    const { firstName, lastName, email } = jwt.verify(token, secret_key);
    req.userData = {
      firstName,
      lastName,
      email,
    };
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
