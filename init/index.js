 
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// let MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
let dbUrl="mongodb+srv://vivek21iya:YUGSVFUSSGL9ESXe@cluster0.ajhlbfx.mongodb.net/?retryWrites=true&w=majority";
main()
  .then((res) => {
    console.log("success connection");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(dbUrl);
}

let categoryAll = [
	"Beachfront",
	"Cabins",
	"Omg",
	"Lake",
	"Design",
	"Amazing Pools",
	"Farms",
	"Amazing Views",
	"Rooms",
	"Lakefront",
	"Tiny Homes",
	"Countryside",
	"Treehouse",
	"Trending",
	"Tropical",
	"National Parks",
	"Casties",
	"Camping",
	"Top Of The World",
	"Luxe",
	"Iconic Cities",
	"Earth Homes",
];

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "65b53f5a9f888f362363671c",
    price: obj.price * 25,
		category: [
			`${categoryAll[Math.floor(Math.random() * 22)]}`,
			`${categoryAll[Math.floor(Math.random() * 22)]}`,
		],
	}));
  await Listing.insertMany(initData.data);
  console.log("data was initialised");
};

initDB();
