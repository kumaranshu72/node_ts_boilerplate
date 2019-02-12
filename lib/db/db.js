"use strict";

var mongoose = require('mongoose');

var _require = require('../config/config'),
    mongoUrl = _require.mongoUrl;

mongoose.connect(mongoUrl, {
  useNewUrlParser: true
});