'use strict';

var _app = require('./../app');

var _app2 = _interopRequireDefault(_app);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _app2.default().expressServer();
var port = process.env.PORT || 5000;
var server = _http2.default.createServer(app);
server.listen(port);
console.log('app listening on ' + port);
//# sourceMappingURL=www.js.map