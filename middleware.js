// Function that logs to the console the method, url and current date of the request.
const logger = (req, res, next) => {
  const date = new Date();
  console.log(
    `${req.method} ${req.url}, ${date.toDateString()}, ${date.getHours()}`
  );
  next();
};

// Function that authenticates if the request is from an admin.
// If admin then continue.
// Otherwise stop and send an appropriate message.
const auth = (req, res, next) => {
  const { user } = req.query;

  if (user === "admin") {
    next();
  } else {
    res.status(403).send("Access Denied");
  }
};

module.exports = { logger, auth };
