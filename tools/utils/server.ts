import * as util from 'gulp-util';
import * as express from 'express';
//import * as openResource from 'open';
import * as serveStatic from 'serve-static';
import * as codeChangeTool from './code_change_tools';
import {resolve} from 'path';
import {APP_BASE, APP_DEST, DOCS_DEST, DOCS_PORT} from '../config';
var openResource = require('open');
export function serveSPA() {
  let server = express();
  codeChangeTool.listen();
  server.use.apply(server, codeChangeTool.middleware);
  var port = process.env.PORT || 3000;
  server.listen(port, () => {
    util.log('Server is listening on port: ' + port);
    openResource('http://localhost:' + port + APP_BASE + APP_DEST);
  });
}

export function notifyLiveReload(e) {
  let fileName = e.path;
  codeChangeTool.changed(fileName);
}

export function serveDocs() {
  let server = express();

   server.use(
    APP_BASE,
    serveStatic(resolve(process.cwd(), DOCS_DEST))
  );

   server.listen(DOCS_PORT, () =>
    openResource('http://localhost:' + DOCS_PORT + APP_BASE)
  );
}
