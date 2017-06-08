exports.getAll = (req, res, next) => {
  req.app.get('db').getAll().then(response => {
    res.status(200).send(response);
  })
}
