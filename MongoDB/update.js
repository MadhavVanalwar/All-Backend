//v-33
//Update Data in MongoDB
//Make New File for Update data
//Import MongoDB connection
//Update single and multiple records
//Interview Questions

const dbConnect = require("./mongodb")

const updateData = async () => {
	let data = await dbConnect()

	// let result = await data.updateOne(
	// 	{ name: "max 1" },
	// 	{ $set: { name: "max pro 5" } }
	// )

    let result = await data.updateMany(
		{ name: "note 7" },
		{ $set: { name: "max pro 7",price:500 } }
	)
    console.log(result,"data updated....")
}
updateData()