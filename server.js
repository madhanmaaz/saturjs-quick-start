const express = require("express")
const app = express()
const saturjs = require("saturjs")

saturjs.setup(app, {
    dev: true, // just change true in production.
    version: require("./package.json").version // version of your app.
})
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    const systemInfo = {
        platform: process.platform,              // OS Platform (e.g., 'linux', 'win32', 'darwin')
        architecture: process.arch,              // CPU architecture (e.g., 'x64', 'arm')
        nodeVersion: process.version,            // Node.js version
        saturjs: 'v1.0.0'
    }

    res.render("home", {
        systemInfo
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("SaturJs Running on: http://localhost:" + PORT)
})