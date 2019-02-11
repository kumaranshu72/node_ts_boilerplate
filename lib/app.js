"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Creates and configures an ExpressJS web server.
var App =
/*#__PURE__*/
function () {
  // ref to Express instance
  // Run configuration methods on the Express instance.
  function App() {
    _classCallCheck(this, App);

    _defineProperty(this, "express", void 0);

    this.express = (0, _express.default)();
    this.routes();
  }

  _createClass(App, [{
    key: "routes",
    value: function routes() {
      var router = _express.default.Router();

      router.get('/', function (req, res, next) {
        res.json({
          message: 'Hello World!'
        });
      });
      this.express.use('/', router);
    }
  }]);

  return App;
}();

var _default = new App().express;
exports.default = _default;