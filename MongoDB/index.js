//MongoDB Tutorial Code Step By Step
//v-27
//Install MongoDB
//Download MongoDB
//Set Environment for Mongo
//MongoDB compass Tool
//Interview Question

//v-28
//MongoDB Basic
//What is MongoDB
//MongoDB vs SQL
//MongoDB basic commands
//Interview Question

//What is mongoDB
//MongoDB is a NoSQL database
//The data stored in a collection
//Collection don't have row and columns
//Data is stored in the form of object.

//v-29
//Crud Operations in MongoDB
//How to insert data collection
//How to check Inserted Data
//How to Update Data
//How to delete Data
//Interview Question

//v-30
//Connect Node With MongoDB
//Connect MongoDB with Node js
//Show Data from mongoDB
//Interview Questions

//All Commonds of MongoDB

// const { MongoClient } = require("mongodb")
// const url = "mongodb://127.0.0.1:27017"
// const database = "e-comm"
// const client = new MongoClient(url)

// async function getData() {
// 	let result = await client.connect()
// 	let db = result.db(database)
// 	let collection = db.collection("products")
//     let response =await collection.find({}).toArray()
// 	console.log(response)
// }
// getData()

//v-31
//Read Data from MongoDB
//Read Data from MongoDB
//Make file for db connection
//Handle Promise
//Interview Questions

// const { MongoClient } = require("mongodb")
// const url = "mongodb://127.0.0.1:27017"
// const database = "e-comm"
// const client = new MongoClient(url)

// async function dbConnect() {
// 	let result = await client.connect()
// 	let db = result.db(database)
// 	return db.collection("products")
// 	// let response =await collection.find({name:'M 40'}).toArray()
// 	// let response =await collection.find({name:'nokia 1100'}).toArray()
// 	// console.log(response)
// }

//Promise handle then and catch
// dbConnect().then((resp) => {
// 	resp
// 		.find({name:'M 40'})
// 		.toArray()
// 		.then((data) => {
// 			console.log(data)
// 		})
// })
// console.log(dbConnect())

// Promise handle async and await
// const dbConnect = require("./mongodb")
// const main = async () => {
// 	let data = await dbConnect()
// 	data = await data.find().toArray()
// 	console.log(data)
// }
// main()

//v-32
//Insert Data from MongoDB
//Make New File for Insert data
//Import MongoDB connection
//Insert single and multiple records
//Interview  Questions

// const dbConnect = require("./mongodb")

// const insert = async () => {
// 	const db = await dbConnect()
// 	const result =await db.insertOne({
// 		name: "note 7",
// 		brand: "vivo",
// 		price: 320,
// 		category: "mobile",
// 	})
// 	if(result.acknowledged){
// 	    console.log("data inserted...")
// 	}

// 	// const result = await db.insertMany([
// 	// 	{
// 	// 		name: "max 1",
// 	// 		brand: "micromax",
// 	// 		price: 220,
// 	// 		category: "mobile",
// 	// 	},
//     //     {
// 	// 		name: "max 2",
// 	// 		brand: "micromax",
// 	// 		price: 320,
// 	// 		category: "mobile",
// 	// 	},
//     //     {
// 	// 		name: "max 3",
// 	// 		brand: "micromax",
// 	// 		price: 420,
// 	// 		category: "mobile",
// 	// 	},
// 	// ])
// 	// if (result.acknowledged) {
// 	// 	console.log("data inserted...")
// 	// }
// }
// insert()

// //v-33
// //Update Data in MongoDB
// //Make New File for Update data
// //Import MongoDB connection
// //Update single and multiple records
// //Interview Questions

// const dbConnect = require("./mongodb")

// const updateData = async () => {
// 	let data = await dbConnect()

// 	// let result = await data.updateOne(
// 	// 	{ name: "max 1" },
// 	// 	{ $set: { name: "max pro 5" } }
// 	// )

//     let result = await data.updateMany(
// 		{ name: "note 7" },
// 		{ $set: { name: "max pro 7",price:500 } }
// 	)
//     console.log(result,"data updated....")
// }
// updateData()

//v-34
//Delete Data in MongoDB
//Import MongoDB connection
//Delete single and multiple records
//interview Questions

// const dbConnect = require("./mongodb")

// const deleteData = async () => {
// 	let data = await dbConnect()
// 	// let result = await data.deleteOne({name:"max pro 7"})
// 	let result = await data.deleteMany({ name: "max pro 7" })
// 	if (result.acknowledged) {
// 		console.log("record deleted successfully....")
// 	}
// 	console.log(result)
// }
// deleteData()

//v-35
//API With MongoDB
//Make New File for API
//Import and use Mongo Config
//Make API for get data
//Test With Postman
//Interview Questions

// const express = require("express")
// const dbConnect = require("./mongodb")
// const app = express()

// app.get("/", async (req, resp) => {
// 	let data = await dbConnect()
// 	data = await data.find().toArray()
// 	console.log(data)
// 	// resp.send({ name: "madhav" })
// 	resp.send(data)
// })

// app.listen(5000,()=>{
// console.log('server connected to 5000....')
// })

//v-36
//Nodejs Post API method
//Make Post method For API
//Send data from postman
//Get data in node js by request
//Write Code for insert data in MongoDB
//Interview Questions

// const express = require("express")
// const dbConnect = require("./mongodb")
// const app = express()

// app.use(express.json()) //middlerware use

// app.get("/", async (req, resp) => {
// 	let data = await dbConnect()
// 	data = await data.find().toArray()
// 	console.log(data)
// 	// resp.send({ name: "madhav" })
// 	resp.send(data)
// })

// app.post("/", async (req, resp) => {
// 	// console.log(req.body)//send the data by postaman
//     let data = await dbConnect()
//     let result =await data.insertOne(req.body)
// 	// resp.send(req.body)
// 	resp.send(result) //send data from postman to mongodb one data
// })

// app.listen(5000, () => {
// 	console.log("server connected to 5000....")
// })

// v-37
//Node js Put API method
//Make PUT method For API
//Send data from postman
//Handle data in node js by request
//Write Code for Update data in MongoDB
//Interview Questions

// const express = require("express")
// const dbConnect = require("./mongodb")
// const app = express()

// app.use(express.json()) //middlerware use

// app.get("/", async (req, resp) => {
// 	let data = await dbConnect()
// 	data = await data.find().toArray()
// 	console.log(data)
// 	// resp.send({ name: "madhav" })
// 	resp.send(data)
// })

// app.post("/", async (req, resp) => {
// 	let data = await dbConnect()
// 	let result = await data.insertOne(req.body)
// 	resp.send(result) //send data from postman to mongodb one data
// })

// app.put("/:name", async (req, resp) => {
// 	// console.log(req.body)
// 	let data = await dbConnect()
// 	let result = await data.updateOne(
// 		// { name: "Nokia 1011" },
// 		// { name: req.body.name},
// 		{ name: req.params.name},//http://localhost:5000/Iphone 13
// 		{ $set: req.body }
// 	)
// 	resp.send({ result: "updated..." })
// })

// app.listen(5000, () => {
// 	console.log("server connected to 5000....")
// })

// // v-38
// //Node Delete method For API
// //Send data from postman
// //Handle data in node js by request
// //Write Code for Delete data in MongoDB
// //Interview Questions

// const express = require("express")
// const dbConnect = require("./mongodb")
// const mongodb = require("mongodb")
// const app = express()

// app.use(express.json()) //middlerware use

// app.get("/", async (req, resp) => {
// 	let data = await dbConnect()
// 	data = await data.find().toArray()
// 	console.log(data)
// 	// resp.send({ name: "madhav" })
// 	resp.send(data)
// })

// app.post("/", async (req, resp) => {
// 	let data = await dbConnect()
// 	let result = await data.insertOne(req.body)
// 	resp.send(result)
// })

// app.put("/:name", async (req, resp) => {
// 	let data = await dbConnect()
// 	let result = await data.updateOne(
// 		{ name: req.params.name },
// 		{ $set: req.body }
// 	)
// 	resp.send({ result: "updated..." })
// })

// app.delete("/:id", async(req, resp) => {
// 	console.log(req.params.id) //id get by postman
//     const data =  await dbConnect()
//     const result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
// 	// resp.send("done")
// 	resp.send(result)
// })

// app.listen(5000, () => {
// 	console.log("server connected to 5000....")
// })
