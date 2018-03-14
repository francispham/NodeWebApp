const express = require('express');


// ROUTES
const app = express();

app.get('/', (req, res) => {
  res.send({hi: "there"});
});
// MIDDLEWARE









const PORT = process.env.PORT || 5000;
app.listen(PORT);
