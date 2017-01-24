'use strict';
require('babel-register');
// Currently all css requires are wrapped in a server check
// because we cannot parse css on the server currently.
// Webpack does it for the dev server, and the prodpack command
// extracts it into dist/styles.css for a production server.
// Should probably be solved in an easier way.
process.env.NODE_ENV = 'server';
var server = require('./server').default;
// Server is just a default function.
server();
