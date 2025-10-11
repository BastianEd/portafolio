// netlify/functions/server.js

// Usamos require() en lugar de import
const { createRequestHandler } = require("@react-router/node");
const build = require("../../build/server/index.js");

// La exportación del handler sigue siendo la misma
exports.handler = createRequestHandler(build);