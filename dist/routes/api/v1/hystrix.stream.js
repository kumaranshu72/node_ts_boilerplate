"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hystrixjs_1 = require("hystrixjs");
exports.default = (request, response) => {
    console.log("Starting hystrix stream");
    response.append('Content-Type', 'text/event-stream;charset=UTF-8');
    response.append('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');
    response.append('Pragma', 'no-cache');
    const subscription = hystrixjs_1.hystrixSSEStream.toObservable().subscribe(function onNext(sseData) {
        response.write('data: ' + sseData + '\n\n');
    }, function onError(error) {
        console.log(error);
    }, function onComplete() {
        return response.end();
    });
    ;
    request.connection.addListener('close', function () {
        subscription.unsubscribe();
    });
    return subscription;
};
//# sourceMappingURL=hystrix.stream.js.map