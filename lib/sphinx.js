"use strict"

const Sphinx = require("sphinx-promise")

module.exports = app => {
  app.addSingleton("sphinx", createOneClient)
}

function createOneClient(config, app) {
  const host = config.host || "127.0.0.1"
  const port = config.port || 9312

  app.coreLogger.info("[egg-sphinx] server %s:%s", host, port)

  const client = new Sphinx({
    host: host,
    port: port
  })

  client.SPH_MATCH_ALL = Sphinx.SPH_MATCH_ALL
  client.SPH_MATCH_ANY = Sphinx.SPH_MATCH_ANY
  client.SPH_MATCH_PHRASE = Sphinx.SPH_MATCH_PHRASE
  client.SPH_MATCH_BOOLEAN = Sphinx.SPH_MATCH_BOOLEAN
  client.SPH_MATCH_EXTENDED = Sphinx.SPH_MATCH_EXTENDED
  client.SPH_MATCH_EXTENDED2 = Sphinx.SPH_MATCH_EXTENDED2
  client.SPH_MATCH_FULLSCAN = Sphinx.SPH_MATCH_FULLSCAN

  return client
}
