const createHttpError = require("http-errors");

const roleIs = (role) => (req, res, next) => {
  if (req.decoded.role === role) return next();
  return next(createHttpError.Forbidden("User role is not appropriate"));
};

module.exports = roleIs;
