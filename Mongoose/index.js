//MongoDB Tutorial Code Step By Step
//v-39
//Start With Mongoose
//What is Mongoose
//Difference between Mongoose vs Mongodb Package
//Install Mongoose
//What is Schemas
//What is Model
//Connect Node js and MongoDB with Mongoose

// const mongoose = require("mongoose")
// const main = async () => {
// 	await mongoose.connect("mongodb://127.0.0.1:27017/e-comm")
// 	const ProductSchema = new mongoose.Schema({
// 		name: String,
//         price:Number
// 	})
//     const ProductsModel = mongoose.model("products",ProductSchema)
//     let data = new ProductsModel({name:"m8",price:1000})
//     let result = await  data.save()
//     console.log(result)
// }
// main()

//v-40
// CRUD With Mongoose
//Continue Last video Code(what is mongoose,model,schema etc)
//Update  Record
//Delete Record
//Find and Read Result

// const mongoose = require("mongoose")
// const main = async () => {
// 	await mongoose.connect("mongodb://127.0.0.1:27017/e-comm")
// 	const ProductSchema = new mongoose.Schema({
// 		name: String,
// 		price: Number,
// 		brand: String,
// 		category: String,
// 	})
// 	const ProductsModel = mongoose.model("products", ProductSchema)
// 	let data = new ProductsModel({
// 		name: "Note Pro",
// 		price: 250,
// 		brand: "max",
// 		category: "mobile",
// 	})
// 	let result = await data.save()
// 	console.log(result)
// }
// main()

// const mongoose = require("mongoose")
// const saveInDB = async () => {
// await mongoose.connect("mongodb://127.0.0.1:27017/e-comm")
// 	const ProductSchema = new mongoose.Schema({
// 		name: String,
// 		price: Number,
// 		brand: String,
// 		category: String,
// 	})
// 	// const ProductsModel = mongoose.model("products", ProductSchema)
// 	// let data = new ProductsModel({
// 	// 	name: "Note Pro",
// 	// 	price: 250,
// 	// 	brand: "max",
// 	// 	category: "mobile",
// 	// })
// 	// let result = await data.save()
// 	// console.log(result)
// }
// saveInDB()

//update data
// const mongoose = require("mongoose")
// const updateInDB = async () => {
// 	await mongoose.connect("mongodb://127.0.0.1:27017/e-comm")
//     const ProductSchema = new mongoose.Schema({
//         		name: String,
//         		price: Number,
//         		brand: String,
//         		category: String,
//         	})
// 	const Product = mongoose.model("products", ProductSchema)
// 	let data = await Product.updateOne(
// 		{ name: "note 5" },
// 		{ $set: { price: 7000,name:'note 8' } }
// 	)
// 	console.log(data)
// }
// updateInDB()

//delete data
// const mongoose = require("mongoose")
// const deleteInDB = async () => {
// 	await mongoose.connect("mongodb://127.0.0.1:27017/e-comm")
// 	const ProductSchema = new mongoose.Schema({
// 		name: String,
// 		price: Number,
// 		brand: String,
// 		category: String,
// 	})
// 	const Product = mongoose.model("products", ProductSchema)
// 	let data = await Product.deleteOne({name:'m8'})
// 	console.log(data)
// }
// deleteInDB()

// find data
// const mongoose = require("mongoose")
// const findInDB = async () => {
// 	await mongoose.connect("mongodb://127.0.0.1:27017/e-comm")
// 	const ProductSchema = new mongoose.Schema({
// 		name: String,
// 		price: Number,
// 		brand: String,
// 		category: String,
// 	})
// 	const Product = mongoose.model("products", ProductSchema)
// 	// let data = await Product.find()                                                                                                                              // 	let data = await Product.find({name:"nokia 1100"})
// 	console.log(data)
// }
// findInDB()

//v-41
//Post API With Mongoose
//Make config file for MongoDB
//Make Post Route
//Get data from postman and save in DB
//InterviewQuestions

// const mongoose = require("mongoose")
// // require("./config")
// // const Product = require("./product")
// mongoose.connect("mongodb://127.0.0.1:27017/e-comm")

// const ProductSchema = new mongoose.Schema({
// 	name: String,
// 	price: Number,
// 	brand: String,
// 	category: String,
// })

// // module.exports = mongoose.model("products", ProductSchema)
// const Product = mongoose.model("products", ProductSchema)
// const express = require("express")
// const app = express()
// app.use(express.json())

// app.post("/create", async(req, resp) => {
//     let data = new Product(req.body)
//     let result = await data.save()
//     // console.log(req.body)
//     console.log(result)
// 	resp.send(result,"Done")
// })

// app.listen(5000, () => {
// 	console.log("server connected to 5000")
// })

//v-42
//GET,DELETE AND PUT API
//Example fo GET Method API
//Example of DELETE Method API
//Example of PUT Method API
//Interview Question

// const mongoose = require("mongoose")
// // require("./config")
// // const Product = require("./product")
// mongoose.connect("mongodb://127.0.0.1:27017/e-comm")
// const ProductSchema = new mongoose.Schema({
// 	name: String,
// 	price: Number,
// 	brand: String,
// 	category: String,
// })
// // module.exports = mongoose.model("products", ProductSchema)
// const Product = mongoose.model("products", ProductSchema)
// const express = require("express")
// const app = express()
// app.use(express.json())

// app.post("/create", async (req, resp) => {
// 	let data = new Product(req.body)
// 	let result = await data.save()
// 	console.log(result)
// 	resp.send(result, "Done")
// })

// app.get("/list", async (req, resp) => {
// 	//get
// 	let data = await Product.find()
// 	resp.send(data)
// })

// app.delete("/delete/:_id", async (req, resp) => {
// 	console.log(req.params)
// 	let data = await Product.deleteOne(req.params)
// 	resp.send(data)
// })

// app.put("/update/:_id", async (req, resp) => {
// 	console.log(req.params)
// 	let data = await Product.updateOne(req.params, { $set: req.body })
// 	resp.send(data)
// })

// app.listen(5000, () => {
// 	console.log("server connected to 5000")
// })

// v-43
//Search API in Nodejs with MongoDB
//Make simple GET Route for API
//Serach with Single field
//Search with multiple fields
//Test API
//Interview Question

// const mongoose = require("mongoose")
// // require("./config")
// // const Product = require("./product")
// mongoose.connect("mongodb://127.0.0.1:27017/e-comm")
// const ProductSchema = new mongoose.Schema({
// 	name: String,
// 	price: Number,
// 	brand: String,
// 	category: String,
// })
// // module.exports = mongoose.model("products", ProductSchema)
// const Product = mongoose.model("products", ProductSchema)
// const express = require("express")
// const app = express()
// app.use(express.json())

// app.get("/search/:key", async (req, resp) => {
// 	// resp.send("search done")
// 	console.log(req.params.key)
// 	let data = await Product.find({
// 		$or: [
// 			{ name: { $regex: req.params.key } },
// 			{ brand: { $regex: req.params.key } },
//             { price: { $regex: req.params.key } },
//             { category: { $regex: req.params.key } }
// 		],
// 	})
// 	resp.send(data)
// })

// app.listen(5000, () => {
// 	console.log("server connected to 5000")
// })

//v-44
//Upload File in Node js
//Install Multer npm package
//Make Router for upload file
//Write Code for upload file
//Interview Question

// const express = require("express")
// const multer = require("multer")
// const app = express()

// const upload = multer({
// 	storage: multer.diskStorage({
// 		destination: function (req, file, cb) {
// 			cb(null, "uploads")
// 		},
// 		filename: function (req, file, cb) {
// 			cb(null, file.fieldname + "-" + Date.now() + "jpg")
// 		},
// 	}),
// }).single("user_file")

// app.post("/upload", upload, (req, resp) => {
// 	resp.send("file upload")
// })

// app.listen(5000, () => {
// 	console.log("server connected to 5000")
// })

//v-45
//OS Module in Nodejs
//What is OS Module
//Import functions of OS module
//Interview Question

// const os = require("os")
// console.log(os)
// console.log(os.arch())
// console.log(os.freemem()/(1024*1024*1024)) //RAM check how to remaing
// console.log(os.totalmem()/(1024*1024*1024)) //total memory check how to remaing
// console.log(os.hostname()) //which system we use check
// console.log(os.platform()) //
// console.log(os.userInfo()) //

//v-46
//Events and Event Emitter in Nodejs
//What is Events and Event Emitter
//Make an event and call it
//Interview Question
// const express = require("express")
// const EventEmitter = require("events")
// const app = express()
// const event = new EventEmitter()


// let count = 0
// event.on("countAPI", () => {
//     count++
// 	console.log("event called....",count)
// })

// app.get("/", (req, resp) => {
// 	resp.send("api called...")
// 	event.emit("countAPI")
// })

// app.get("/search", (req, resp) => {
// 	resp.send("search api called...")
// 	event.emit("countAPI")
// })

// app.get("/update", (req, resp) => {
// 	resp.send("update api called...")
// 	event.emit("countAPI")
// })

// app.listen(5000, () => {
// 	console.log("server connected to 5000")
// })


//v-47
//REPL
//Read-Eval-Print-Loop
//What  is REPL
//Example of REPL
//Interview Question
// const x =10
// console.log(x++)