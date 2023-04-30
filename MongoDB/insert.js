//v-32
//Insert Data from MongoDB
//Make New File for Insert data
//Import MongoDB connection
//Insert single and multiple records
//Interview  Questions

const dbConnect = require("./mongodb")

const insert = async () => {
	const db = await dbConnect()
	// const result =await db.insertOne({
	// 	name: "note 7",
	// 	brand: "vivo",
	// 	price: 320,
	// 	category: "mobile",
	// })
	// if(result.acknowledged){
	//     console.log("data inserted...")
	// }

	const result = await db.insertMany([
		{
			name: "max 1",
			brand: "micromax",
			price: 220,
			category: "mobile",
		},
        {
			name: "max 2",
			brand: "micromax",
			price: 320,
			category: "mobile",
		},
        {
			name: "max 3",
			brand: "micromax",
			price: 420,
			category: "mobile",
		},
	])
	if (result.acknowledged) {
		console.log("data inserted...")
	}
}
insert()