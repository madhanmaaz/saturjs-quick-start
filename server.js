const { setup, Router, renderPage } = require("saturjs")
const router = Router()

router.get("/", renderPage("index"))

module.exports = setup({
    appRouter: router,
})