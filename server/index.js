// importing the dependencies we need
express = require('express');
bodyParser = require('body-parser');
cors = require('cors');
app = express();

var port = 3000;
// initializing the server and define what app should use to run the API
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// start the server and listen on inserted port
app.listen(port);
console.log("Your server is runnning on port" +  port + '.');


