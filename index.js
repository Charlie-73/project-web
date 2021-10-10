const http = require("http")
const express =  require("express")
const path = require("path")

const app = express()
const hbs = require("hbs")


//register partials
hbs.registerPartials(path.join(__dirname, "views/partials"))

app.use(express.static('express'))
app.use("/static", express.static(path.join(__dirname, "public")))
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.use(express.urlencoded({ extended: false }))

//set views location to app
app.set("views", path.join(__dirname, "views"))


app.set("view engine", "hbs")

//home render
app.get("/", function(req, res) {
    res.render("index", {title: "Music", isLogin: ""})
})

//render login
app.get("/login", function(req, res) {
   res.render("partials/login", {title: "login"})
})

app.get("/Register", function(req, res) {
    res.render("partials/Register", {title: "register"})
})


const server = http.createServer(app)
const port = 5000
server.listen(port, () => {
    console.log("server running on ", port)
})