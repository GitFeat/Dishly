import express from "express";

const app = express();
const port = 8080;

app.get("/", (_req, res) => {
	res.send("Hello World!");
});

// --------------------------- Experimentations BEGINS ! ------------------------------------------------------

app.post("/", (_req, res) => {
	res.send("Got a POST request");
});

app.put("/users", (_req, res) => {
	res.send("Got a PUT request at /user");
});

app.listen(port, () => {
	console.log(`Listening on port ${port} ...`);
});
