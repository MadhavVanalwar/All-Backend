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


// v-38
//Node Delete method For API
//Send data from postman
//Handle data in node js by request
//Write Code for Delete data in MongoDB
//Interview Questions

const express = require("express")
const dbConnect = require("./mongodb")
const mongodb = require("mongodb")
const app = express()

app.use(express.json()) //middlerware use

app.get("/", async (req, resp) => {
	let data = await dbConnect()
	data = await data.find().toArray()
	console.log(data)
	// resp.send({ name: "madhav" })
	resp.send(data)
})

app.post("/", async (req, resp) => {
	let data = await dbConnect()
	let result = await data.insertOne(req.body)
	resp.send(result)
})

app.put("/:name", async (req, resp) => {
	let data = await dbConnect()
	let result = await data.updateOne(
		{ name: req.params.name },
		{ $set: req.body }
	)
	resp.send({ result: "updated..." })
})

app.delete("/:id", async(req, resp) => {
	console.log(req.params.id) //id get by postman
    const data =  await dbConnect()
    const result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
	// resp.send("done")
	resp.send(result)
})

app.listen(5000, () => {
	console.log("server connected to 5000....")
})
