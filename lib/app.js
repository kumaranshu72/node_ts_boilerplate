"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var bodyParser = _interopRequireWildcard(require("body-parser"));

var _mongoose = require("mongoose");

var _config = _interopRequireWildcard(require("./config/config"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    _defineProperty(this, "app", void 0);

    this.app = (0, _express.default)();
    this.config();
    this.mountRoutes();
  }

  _createClass(App, [{
    key: "config",
    value: function config() {
      // DB connection
      (0, _mongoose.connect)(_config.CONFIG.mongoUrl, {
        useNewUrlParser: true
      }); // support application/json type post data

      this.app.use(bodyParser.json()); // support application/x-www-form-urlencoded post data

      this.app.use(bodyParser.urlencoded({
        extended: false
      }));
    }
  }, {
    key: "mountRoutes",
    value: function mountRoutes() {
      this.app.use(_routes.default);
    }
  }]);

  return App;
}();

var _default = new App().app;
exports.default = _default;