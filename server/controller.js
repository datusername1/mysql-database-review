module.exports = {
  get: (req, res) => {
    //todo
    Todo.findAll({})
      .then( data => {
        res.status(200).send(data);
      })
      .catch(err => console.log(err));
    // console.log("hello from get");
  },
  post: (req, res) => {
    var { name } = req.body;
    Todo.create({
      name
    })
      .then( data => {
        res.status(201).send(data)
      })
      .catch( err => console.log(err))
    // console.log("hello from post");
  },
  update: (req, res) => {
    //todo
    Todo.update({
      name: req.body.newName,
    }, { where: { id: req.params.id} })
      .then( data => {
        res.status(202).send('updated!');
      })
      .catch( err => console.log(err));
      
    // console.log("hello from update");
  },
  delete: (req, res) => {
    Todo.destroy({
      where: {id: req.params.id}
    })
      .then( data => {
        res.status(200).send('deleted')
      })
      .catch(err => console.log(err));
    // console.log("hello from delete");
  }
};
