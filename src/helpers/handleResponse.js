
const httpError500 = (res, error) => {
  res.status(500).json({
    status: 500,
    error: "Internal Server Error",
    message: error,
  });
};
const httpSuccess = (res, data) => {
  res.status(200).json({
    status: 200,
    message: "Success",
    data,
  });
};
const handleError = (res, error) => {
  res.status(400).json({
    status: 400,
    error: "Bad Request",
    message: error,
  });
}
module.exports = {
  httpError500,
  httpSuccess,
};
