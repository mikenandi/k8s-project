const express = require("express");
const os = require("os");

const app = express();

PORT = 3000;

app.get("/", (req, res) => {
	const hellomsg = `VERSION 2: hello there, your computer hostname is ${os.hostname()}`;
	console.log(hellomsg);
	res.send(hellomsg);
});

app.listen(PORT, () => console.log(`the server is running at port: ${PORT}`));
