const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const serverless = require('serverless-http');

const router = require('./routes');

const app = express();


app.use(express.json());
app.use("/.netlify/functions/api", router);


mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true });
//.then(() => {
//console.log('Successfully connected to the database!');
//app.listen(process.env.PORT, () => {
//console.log(`server is up and running on ${process.env.PORT}`);
//})
//})
//.catch((e) => console.error(`Failed to connect to database. Error: ${e}`));
module.exports.handler = serverless(app);
