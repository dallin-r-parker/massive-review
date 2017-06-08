

  exports.getAll = (req, res, next) => {
    req.app.get('db').getAll().then(response => {
      res.status(200).send(response);
    })
  }

  exports.create = (req, res, next) => {

    const { firstname, lastname, email, password } = req.body;

    req.db.create([firstname, lastname, email, password]).then(response => {
       res.status(200).send(response)
    })
  }
