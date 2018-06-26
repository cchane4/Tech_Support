const express = require('express');
const ourController = require('./controllers/our_controller');

module.exports = function(app){
  const apiRoutes = express.Router();

  //routes will go here
apiRoutes.get('/helloworld, ourController.helloworld');
app.use('/api', apiRoutes);
}