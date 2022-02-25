module.exports.logger = (req, res, next) => {
  const date = new Date();
  console.log(
    `==========> [${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] ${
      req.method
    } ${req.url}`
  );
  next();
};

module.exports.domain = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};
