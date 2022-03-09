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

app.get("/register", (req, res) => {
  const input = req.query;
  const name = input.name;
  const email = input.email;
  const number = input.num;
  const password = input.password;

  checkEmail(email);
  saveData(JSON.stringify(input));
});

const saveData = (data) => {
  let fs = require("fs");
  fs.appendFile("saveData.txt", data + "\n", callback);
};

const callback = (err) => {
  if (err) {
    console.log("error!");
  }
};

const checkEmail = (email) => {
  let randomNumber = Math.random();
  console.log(randomNumber);
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "YOUREMAIL@gmail.com",
      pass: "YOUR PASSWORD",
    },
  });
  const mailOptions = {
    from: "YOUREMAIL@gmail.com",
    to: email,
    subject: "Verifying your email",
    text: "send back the verification code" + randomNumber,
  };
  transporter.sendMail(mailOptions, function(error, info){
	if (error) {
	  console.log(error);
	} else {
	  console.log('Email sent: ' + info.response);
	}
  });

};

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
