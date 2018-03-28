const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Client = mongoose.model('clients');

module.exports = app => {
  app.get('/api/clients', requireLogin, async (req, res) => {
    const clients = await Client.find({ _user: req.user.id });

    res.send(clients);
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
