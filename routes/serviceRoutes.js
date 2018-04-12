const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Service = mongoose.model('services');

module.exports = app => {
  app.get('/api/services', requireLogin, async (req, res) => {
    // To get only services belong to current user
    // const services = await Client.find({ _user: req.user.id });
    const services = await Service.find()
    res.send(services);
  })

  app.post('/api/services', requireLogin, async(req, res) => {
    const { formValues, _user, _client} = req.body;
    console.log(req.body)
    const service = new Service({
      // serviceName,
      formValues,
      // treatments: treatments.split(',')
      //                       .map( (create_at, clientSign, userSign, _service) => ({
      //                         create_at, clientSign, userSign, _service
      //                       }) ),
      _user: req.user.id,
      _client: req.client.id,
      create_at: Date.now()
    });
    try{
      service.save();
      const user = await req.user.save();
      const client = await req.client.save();
      res.send(user);
      res.send(client);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
