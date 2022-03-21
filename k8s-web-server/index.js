const express = require("express");
const os = require("os");

const app = express();

PORT = 3000;

app.get("/", (req, res) => {
	const hellomsg = `VERSION 2: hello there, your computer hostname is ${os.hostname()}`;
	console.log(hellomsg);
	res.send(hellomsg);
});

app.get("/nginx", async (req, res) => {
	const url = "http://nginx";
	const response = await fetch(url);
	const body = await response.text();
	res.status(200).send(body);
});

app.listen(PORT, () => console.log(`the server is running at port: ${PORT}`));
