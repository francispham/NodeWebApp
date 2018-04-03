module.exports = (req, res, next) => {
  if (req.client.credits < 1) {
    return res.status(401).send({ error: 'Not enough credit!' });
  }

  next();
};
