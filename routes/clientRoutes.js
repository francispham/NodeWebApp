const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Client = mongoose.model('clients');

module.exports = app => {
  app.get('/api/clients', requireLogin, async (req, res) => {
    // To get only clients belong to current user
    // const clients = await Client.find({ _user: req.user.id });
    const clients = await Client.find()

    res.send(clients);
  })

  app.get('/api/clients/:id', requireLogin, async (req, res) => {
    console.log("clientRoutes=========================================")
    const client = await Client.findById(id, function (err, client) {});
    res.send(client);
  })

  app.post('/api/clients', requireLogin, async(req, res) => {
    const {marketing, name, email, password, phone, age, address, postalCode} = req.body;

    const client = new Client({
      marketing, name, email, password, phone, age, address, postalCode,
      _user: req.user.id,
      create_at: Date.now()
    });
    try{
      client.save();
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
