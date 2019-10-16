"use strict"

const mock = require("egg-mock")
const assert = require('assert')

describe("test/sphinx.test.js", () => {
  let app
  before(() => {
    app = mock.app({
      baseDir: "apps/sphinx-test"
    })
    return app.ready()
  })

  after(() => app.close())
  afterEach(mock.restore)

  it("should GET /", () => {
    return app
      .httpRequest()
      .get("/")
      .expect("hi, sphinx")
      .expect(200)
  })

  it("should run normally", async () => {
    const sphinx = app.sphinx.get("sphinxTest")
    const result = await sphinx.query("hello world", {
      matchMode: sphinx.SPH_MATCH_EXTENDED2
    })

    assert(result)
  })
})
