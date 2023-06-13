const router = require("express").Router()

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

router.get("/hello", async (req, res) => {
  await sleep(3 * 1000)
  res.send("Hello World")
})

module.exports = router
