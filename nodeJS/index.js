//Node JS Tutorial Code-Step-By-Step
//v-17
//How Node js Works?
//1.Call Stack
//2.Node API
//3.CallBack Queue
//4.Example
//5.Interview Questions
// console.log("starting up")

// setTimeout(() => {
// 	console.log("2 Second log")
// }, 2000)

// setTimeout(() => {
// 	console.log("0 Second log")
// }, 0)

// console.log("finishing up")

//v-16
//Handle Asynchronous Data in Node.js

// let a = 10
// let b = 0

// let waitingData = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(30)
// 	}, 2000)
// })

// waitingData.then((data) => {
// 	b = data
// 	console.log(a + b)
// })

//v-15
//Asynchronous Basics in Node js
//Asynchronous and Synchronous
//In Synchronous operations tasks are perfomed one at a time
//Users.....=>Products.....=>Cities.....

//In Asynchronous,Second Task do not wait to finish First Task
//Users.....
//.........Products.......
//........................Cities..........

// console.log("start exe....")
// console.log("logic exe....")
// console.log("complete  exe....")

// console.log("start exe....")

// setTimeout(() => {
// 	console.log("logic exe....")
// }, 2000)

// console.log("complete  exe....")

// let a = 10
// let b = 0

// setTimeout(() => {
// 	b = 20
// }, 2000)

// console.log(a + b)

//v-14
//CRUD with File System
//Make file
//Read file
//Update file
//Rename file
//Delete  file
//Interview Question
// const fs = require("fs")
// const path = require("path")
// const dirPath = path.join(__dirname, "crud")
// const filePath = `${dirPath}/apple.txt`
// fs.writeFileSync(filePath, "This is a simple text file")

// fs.readFile(filePath, "utf-8", (err, item) => {
// 	console.log(item)
// })

// fs.appendFile(filePath, "and file name is apple.txt", (err) => {
// 	if (!err) console.log("file is updated....")
// })

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
// 	if (!err) console.log("file name is updated...")
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`)

//v-13
//show file list
//Make files in a folder
//Use path module
//Get file names and print
//Interview  Question
// const fs = require("fs")
// const path = require("path")
// const dirPath = path.join(__dirname, "files")
// console.log(dirPath)
// fs.readdir(dirPath, (err, files) => {
// 	// console.log(files)//read all files here
// 	files.forEach((item) => {
// 		console.log("files name is", item) //read multiple files here....
// 	})
// })

// const fs = require("fs")
// const path = require("path")
// const dirPath = path.join(__dirname, "files")
// console.log(dirPath)
// // fs.writeFileSync(dirPath + "/cardamon.txt", "this is a apple file") //create a single file in that folder

// for (i = 0; i < 5; i++) {
// 	fs.writeFileSync(dirPath + "/hello" + i + ".txt", "a simple text file")
// }
//create multiple files

// const fs = require("fs")
// const path = require("path")
// const dirPath = path.join(__dirname)
// console.log(dirPath)

// const fs = require("fs")
// fs.writeFileSync("apple.txt", "this is a apple file")

//v-12
//Input from commond Line
//Set input  from command line
//Create file with input
//Delete the file with input
//Interview Question
// const fs = require("fs")
// const input = process.argv
// if (input[2] == "add") {
// 	fs.writeFileSync(input[3], input[4])
// } else if (input[2] == "remove") {
// 	fs.unlinkSync(input[3])
// } else {
// 	console.log("invalid  input")
// }

// const fs = require("fs")
// const input = process.argv
// fs.writeFileSync(input[2], input[3])

// console.log(process.argv[3])
// console.log(process.argv[2])
// console.log(process.argv)
// console.log(process) //argument vector

//v-11
//Make a simple API
//Make a sever
//create header and API
//Create an API with static data.
//Put data in another file
//Interview Question
// const http = require("http")
// const data = require("./data")
// http
// 	.createServer((req, resp) => {
// 		resp.writeHead(200, { "Content-Type": "applicationjson" })
// 		resp.write(JSON.stringify(data)) // connected the data.js file
// 		resp.end()
// 	})
// 	.listen(4500, () => {
// 		console.log("server connected to ....4500")
// 	})

//v-10
//Nodemon | time saving module
//What is the nodemon package/
//How to install it?
//npm i -g nodemon (to enter)
//How to use it?
//nodemon  .\index.js

//Interview Question.
//Node js is async (node.js async language...)
//1.Run First Script
//2.Run Second Script(complex  data)
//.....it will not wait to finish 2nd script.....
//3.Run Third script
//4.continue

// console.log("Try Nodemon")
// console.log(100 + 200)

//v-9
//Small Chanllange For you
//Challenge happens if the node_module folder is deleted?
//Correct way to push data on git
//Interview Question.

// const colors = require("colors")
// console.log("madhav".red)

//v-8
//All About Package.json
//What is package file?
//How to make it?
//Check the file in detail.
//Install external Package
//Interview Question
//node js single or multi threaded
//=> single threaded..
//run only one comman ...

// const colors = require("colors")
// console.log("Package.json".red)
// console.log("Package.json".green)
// console.log("Package.json".bgBlue)

//v-7
//Make Basic Server output on Browser
//Make Basic Server.
//Function as parameter in node.
//Arrow function
//Get output on Browser
//Interview Question
// const http = require("http")
// http
// 	.createServer((req, resp) => {
// 		resp.write("<h1> Hello this is madhav vanalwar....</h1>")
// 		resp.end()
// 	})
// 	.listen(4500, () => {
// 		console.log("server connected.....4500")
// 	})

// const http = require("http")//handle the server and http request in node.js

//video-6
//core Module in Node.js
//What are the core modules? console.log,file system(fs),Buffer,HTTP this the core modules
//what are global modules? // no import the  file then print the value as it is this is the global modules
//Global Model example
//Non-global Module with Example // complusary import the that file firstly this is the non-blobal module
//Interview Question
// const gs = require("fs").writeFileSync
// gs("xyz.txt", "abc") //we can change the file name this type

// const fs = require("fs").writeFileSync
// fs("abe.txt", "abc") //we can create text file this type

// console.log("->>", __filename) //to tell the file name
// console.log("->>", __dirname) //to tell the directory name

//to create the text file by using the file system
// const fs = require("fs")
// fs.writeFileSync("hello2.txt", "like and subscribe")

// const fs = require("fs")
// console.log("Code stpe by stpe")
// fs.writeFileSync("hello.txt", "code step by step")

//video-5
//Js Fundamentals for Node.js
//Conditions,Loops and Array
//The import function and variables from another file

//Interview Question
//what is the filter?
// Array.filter
// const arr = [2, 4, 7, 1, 3, 8, 3]
// let result = arr.filter((item) => {
// 	return item >= 4
// })
// console.log(result) //ans = [ 7, 8 ]

// let result = arr.filter((item) => {
// 	return item > 4
// })
// console.log(result) //ans = [ 4, 7, 8 ]

// let result = arr.filter((item) => {
// 	return item === 3
// })
// console.log(result) // ans=[ 3, 3 ]

// arr.filter((item) => {
// 	console.log(item)
// })

// import { x, y } from "./app"
//doesn't use the import and export in node.js
// const app = require("./app")
// console.log(app)
// console.log(app.x)
// console.log(app.y)
// console.log(app.z()) //call the function this type access the app.js file values here

//array condition
// const arr = [2, 4, 7, 1, 3, 8, 3]
// console.log(arr)
// console.log(arr[0])

//for loop condition
// var x = 20
// for (i = 0; i < 10; i++) {
// 	console.log(i)
// }

//if condition
// if (x === 20) {
// 	console.log("matched..")
// }

//video-4
// var a = 20
// var b = 30
// var c = 40
// console.log(a + b + c)

// console.log("madhav")
