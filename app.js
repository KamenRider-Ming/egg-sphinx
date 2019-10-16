"use strict"

const sphinx = require("./lib/sphinx")

module.exports = app => {
  if (app.config.sphinx.app) {
    sphinx(app)
  }
}
