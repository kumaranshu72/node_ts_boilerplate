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

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    _defineProperty(this, "app", void 0);

    this.app = (0, _express.default)();
    this.config();
  }

  _createClass(App, [{
    key: "config",
    value: function config() {// support application/json type post data
      //  this.app.use(bodyParser.json());
      // support application/x-www-form-urlencoded post data
      // this.app.use(bodyParser.urlencoded({ extended: false }));
    }
  }]);

  return App;
}();

var _default = new App().app;
exports.default = _default;