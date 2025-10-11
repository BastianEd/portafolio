// netlify/functions/server.mjs

// AHORA: Usamos una importación de espacio de nombres (namespace)
import * as reactRouterNode from "@react-router/node";
import * as build from "../../build/server/index.js";

// Creamos el handler accediendo a la función a través del objeto del módulo
export const handler = reactRouterNode.createRequestHandler(build);