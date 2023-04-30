//Express JS Tutorial Code Step By Step
//v-18
//Express Js
//What is Express js
//Install Express js
//Make Example with express.js
//Interview Question.
// const express = require("express")
// const app = express()

// app.get("", (req, res) => {
// 	res.send("Hello,This is Home page")
// })

// app.get("/about", (req, res) => {
// 	res.send("Hello,This is About page")
// })

// app.get("/help", (req, res) => {
// 	res.send("Hello,This is help page")
// })

// app.listen(5000, () => {
// 	console.log("server connected to 5000.....")
// })

//v-19
//Routing Params Request and Response
// const express = require("express")
// const app = express()

// app.get("", (req, res) => {
// 	// console.log("data send by browser", req.query)
// 	console.log("data send by browser", req.query.name) //http://localhost:5000/?name=madhav
// 	// res.send("Hello,This is Home page")
// 	res.send("Welcome" + " " + req.query.name) //http://localhost:5000/?name=madhav,sam,peter
// })

// app.get("/about", (req, res) => {
// 	res.send("Hello,This is About page")
// })

// app.get("/help", (req, res) => {
// 	res.send("Hello,This is help page")
// })

// app.listen(5000, () => {
// 	console.log("server connected to 5000.....")
// })

//v-20
//How HTML
//Show json Data
//Link Pages
//Interview Question

// const express = require("express")
// const app = express()

// app.get("", (req, res) => {
// 	res.send(
// 		`<h1>Hello,This is Home page</h1><a href="/about">go to about page</a>`
// 	)
// })

// app.get("/about", (req, res) => {
// 	//http://localhost:5000/about?name=madhav
// 	res.send(
// 		`<input type='text' placeholder='User name'value=" ${req.query.name}"/> <button>click me</button> <a href="/">go to home page</a>`
// 	)
// })

// app.get("/help", (req, res) => {
// 	res.send([
// 		{
// 			name: "madhav",
// 			email: "madhav@gmail.com",
// 		},
// 		{
// 			name: "maddy",
// 			email: "maddy@gmail.com",
// 		},
// 	])
// })

// app.listen(5000, () => {
// 	console.log("server connected to 5000.....")
// })

//v-21
//Make Html Pages
//Make folder for HTML file and access it
//Make HTML files
//Load html files
//Interview Question.
// const express = require("express")
// const app = express()
// const path = require("path")
// const publicPath = path.join(__dirname, "public")

// app.use(express.static(publicPath))

// // console.log(publicPath)
// app.listen(5000, () => {
// 	console.log("server connected to 5000.......")
// })

//v-22
//Remove extension from URL
//Apply get method
//Remove an extension from URL
//Make 404
//Apply 404
//Interview Question
// const express = require("express")
// const path = require("path")
// const app = express()

// const publicPath = path.join(__dirname, "public")
// app.get("/", (req, resp) => {
// 	resp.sendFile(`${publicPath}/index.html`)
// })

// app.get("/about", (req, resp) => {
// 	resp.sendFile(`${publicPath}/about.html`)
// })

// app.get("/home", (req, resp) => {
// 	resp.sendFile(`${publicPath}/home.html`)
// })

// app.get("*", (req, resp) => {
// 	resp.sendFile(`${publicPath}/404page.html`)
// })

// app.listen(5000, () => {
// 	console.log("server connected to 5000.......")
// })

// v-23
// What is the template engine?
// Install ejs template package
// Setup dynamic routing
// Make dynamic page
// Interview Question

// const express = require("express")
// const path = require("path")
// const app = express()

// app.set("view engine", "ejs")

// const publicPath = path.join(__dirname, "public")

// app.get("/", (req, resp) => {
// 	resp.sendFile(`${publicPath}/index.html`)
// })

// app.get("/profile", (req, resp) => {
// 	const user = {
// 		name: "madhav",
// 		age: 25,
// 	}
// 	resp.render("profile", { user })
// })

// app.get("/about", (req, resp) => {
// 	resp.sendFile(`${publicPath}/about.html`)
// })

// app.get("/home", (req, resp) => {
// 	resp.sendFile(`${publicPath}/home.html`)
// })

// app.get("*", (req, resp) => {
// 	resp.sendFile(`${publicPath}/404page.html`)
// })

// app.listen(5000, () => {
// 	console.log("server connected to 5000.......")
// })

//v-24
//Dynamic
//How to make Loop in ejs
//Make Header file
//Show common header file
//Interview Question

// const express = require("express")
// const path = require("path")
// const app = express()

// app.set("view engine", "ejs")

// const publicPath = path.join(__dirname, "public")

// app.get("/", (req, resp) => {
// 	resp.sendFile(`${publicPath}/index.html`)
// })

// app.get("/profile", (req, resp) => {
// 	const user = {
// 		name: "madhav",
// 		age: 25,
// 		Skill: ["php", "js", "c++", "java", "nodejs"],
// 	}
// 	resp.render("profile", { user })
// })

// app.get("/login", (req, resp) => {
// 	resp.render("login")
// })

// app.get("/about", (req, resp) => {
// 	resp.sendFile(`${publicPath}/about.html`)
// })

// app.get("/home", (req, resp) => {
// 	resp.sendFile(`${publicPath}/home.html`)
// })

// app.get("*", (req, resp) => {
// 	resp.sendFile(`${publicPath}/404page.html`)
// })

// app.listen(5000, () => {
// 	console.log("server connected to 5000.......")
// })

//v-25
//Middleware
//What are Middleware
//How to make a middleware
//Apply Middleware on routes
//Types of middleware
//1.Application-level middleware
//2.Router-level middleware
//3.Error-handling middleware
//4.Build-in middleware
//5.Third-party middleware
//Interview Question
// const express = require("express")
// const app = express()

// const reqFilter = (req, resp, next) => {
// 	console.log(reqFilter)
// 	next()
// }

// const reqFilter = (req, resp, next) => {
// 	if (!req.query.age) {
// 		resp.send("Please provide age")
// 	} else if (req.query.age < 18) {
// 		resp.send("You can not access this page....")
// 	} else {
// 		next()
// 	}
// }

// app.use(reqFilter)

// app.get("/", (req, resp) => {
// 	resp.send("Welcome to Home Page...")
// })

// app.get("/users", (req, resp) => {
// 	resp.send("Welcome to Users Page...")
// })

// app.listen(5000, () => {
// 	console.log("server connected to 5000.......")
// })

//v-26
//Route Level Middleware
//Route Level Middleware
//Apple Middleware on single Route
//Make middleware in different file
//Apply Middleware in the group of route
//Interview Question

// const express = require("express")
// const reqFilter = require("./middleware")
// const app = express()
// const route = express.Router()

// route.use(reqFilter)

// app.get("/", (req, resp) => {
// 	resp.send("Welcome to Home Page...")
// })

// app.get("/users", (req, resp) => {
// 	resp.send("Welcome to Users Page...")
// })

// route.get("/about", (req, resp) => {
// 	resp.send("Welcome to About Page...")
// })

// route.get("/contact", (req, resp) => {
// 	resp.send("Welcome to Contact Page...")
// })

// app.use("/", route)

// app.listen(5000, () => {
// 	console.log("server connected to 5000.......")
// })
