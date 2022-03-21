const express = require("express");
const os = require("os");
const axios = require("axios");

const app = express();

PORT = 3000;

app.get("/", (req, res) => {
	const hellomsg = `VERSION 2: hello there, your computer hostname is ${os.hostname()}`;
	console.log(hellomsg);
	res.send(hellomsg);
});

app.get("/nginx", async (req, res) => {
	try {
		const url = "http://nginx";
		const url1 = "https://gorest.co.in/public/v2/posts";
		const response = await axios.get(url);
		const body = await response.text();
		res.status(200).send(body);
	} catch (err) {
		console.log(err.message);
	}
});

app.listen(PORT, () => console.log(`the server is running at port: ${PORT}`));
