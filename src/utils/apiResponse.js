module.exports = (res, statusCode, message, type, data) => {
  return res.status(statusCode).json({
    status: type,
    message,
    data
  });
};
