// netlify/functions/server.mjs

import { createRequestHandler } from "@react-router/node";
import * as build from "../../build/server/index.js";

// Este es el 'handler' que Netlify estaba buscando.
// Envuelve nuestra aplicación de React Router en el formato correcto.
export const handler = createRequestHandler(build);