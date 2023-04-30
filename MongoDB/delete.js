const dbConnect = require("./mongodb")

const deleteData = async () => {
	let data = await dbConnect()
	// let result = await data.deleteOne({name:"max pro 7"})
	let result = await data.deleteMany({ name: "max pro 7" })
	if (result.acknowledged) {
		console.log("record deleted successfully....")
	}
	console.log(result)
}
deleteData()