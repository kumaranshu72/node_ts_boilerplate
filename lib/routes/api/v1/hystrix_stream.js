"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hystrixjs = require("hystrixjs");

var _default = function _default(request, response) {
  console.log('Starting hystrix stream');
  response.append('Content-Type', 'text/event-streamcharset=UTF-8');
  response.append('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');
  response.append('Pragma', 'no-cache');

  var subscription = _hystrixjs.hystrixSSEStream.toObservable().subscribe(function onNext(sseData) {
    response.write('data: ' + sseData + '\n\n');
  }, function onError(error) {
    console.log(error);
  }, function onComplete() {
    return response.end();
  });

  return subscription;
};

exports.default = _default;