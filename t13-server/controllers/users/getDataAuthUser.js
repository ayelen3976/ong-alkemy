module.exports = function getDataAuthUser(req, res) {
  res.json(req.userData);
};
