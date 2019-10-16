"use strict"

/**
 * egg-sphinx default config
 * @member Config#sphinx
 * @property {String} SOME_KEY - some description
 */
exports.sphinx = {
  clients: {
    sphinxTest: {
      host: '127.0.0.1',
      port: 9312
    }
  },
  app: true
}
