const BASE_DIR = process.env.PWD;
const APP_DIR = __dirname;

const LOG4JS_CONFIG = {
  "appenders": [
    {
      "type": "clustered",
      "appenders": [{
        "type": "dateFile",
        "filename": 'log/access.log',
        "pattern": "-yyyy-MM-dd",
        "category": "http"
      }, {
        "type": "dateFile",
        "filename": 'log/database.log',
        "pattern": "-yyyy-MM-dd",
        "category": "database"
      }, {
        "type": "file",
        "filename": 'log/app.log',
        "maxLogSize": 10485760,
        "numBackups": 3
      }, {
        "type": "logLevelFilter",
        "level": "ERROR",
        "appender": {
          "type": "file",
          "filename": 'log/errors.log',
        }
      }]
    }
  ]
};

const UPLOAD_DIR = `${APP_DIR}/upload`;

module.exports = {
  BASE_DIR,
  APP_DIR,
  LOG4JS_CONFIG,
  UPLOAD_DIR,
};


