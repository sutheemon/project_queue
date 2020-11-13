const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

const { bookingQueue } = require('../controller/booking_queue/index');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

////URL path

app.post('/queue',[bookingQueue]);

//run serve port 3000
app.listen(port, () => console.log('Server Running'));