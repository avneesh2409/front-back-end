var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var products = require('./services/products')
var users = require('./services/users')
var postapi = require('./services/postapi');
var jwt = require('./services/login');
var port = 2002;


app.use(bodyParser.json());
app.use(express.static("public"));


app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	next();
})

app.use('/',jwt);
app.use('/post', postapi);
app.use('/users', users);
app.use('/products', products);
app.use((req, res) => {
	res.status(400).json({
		message: "not possible ! Resource not available",
		error: "resource not found"
	})
})

app.listen(port, () => {
	console.log("server running at ", port);
});
