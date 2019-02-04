"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.get('/', function (req, res) {
  return res.send('Hello World!');
});

app.listen(3000, function () {
  return console.log('Magic happens on port 3000!');
});
