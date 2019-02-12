const mongoose = require('mongoose');
const {mongoUrl} = require('../config/config');

mongoose.connect(mongoUrl, {useNewUrlParser: true});
