const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/Company", (req, res) => {
  res.send("my Company");
});

app.get("/Company-json", (req, res) => {
  res.send({
    name: "allen",
    country: "nepal",
    age: 24,
  });
});

// TWO types of GET request

// // QUERIES
// app.get("/fruits", (req, res) => {
// 	let request_queries = req.query; // {key1: value1, key2: value2}
// })

// // Params
// app.get("/fruits/:fruit_name", (req, res) => {
// 	let a = req.params.fruit_name;

// 	console.log("====================")
// 	console.log(a);
// 	console.log("====================")
// 	res.send("ok");
// });

// // Both
// app.get("/fruits/:fruit_name", (req, res) => {
// 	let input_key_value = req.query;

// 	let fruit_name = req.params.fruit_name;

// 	res.send({
// 		your_fruit_name: fruit_name,
// 		your_username: input_key_value.username
// 	})
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});