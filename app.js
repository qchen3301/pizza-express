// app.js

//require express package
const express = require('express');
//save an express module as 'app'
const app     = express();
//require hbs package
const hbs = require('hbs');
//set all views to render through hbs
app.set("view engine", "hbs")

// assigning 3000 as our port
const PORT    =  process.env.PORT || 3000;

//GET route - homepage
app.get('/', (req,res) => {
	res.render('index.hbs', {message: 'Welcome to Pizza Express!'})
})
//GET route - topping
app.get('/topping/:type', (req,res, next) => {
	res.render('toppings', {toppingChoice: req.params.type})
})
//GET route - order, amount, and size
app.get('/order/:amount/:size', (req, res, next) => {
	res.send(`Your order for ${req.params.amount} ${req.params.size} pizzas will be ready in one minute!`)
	res.render('order', 
		{	numberOfPizzas: req.params.amount,
			sizeOfPizzas: req.params.size 	})
})
// tells the server to listen for requests on port 3000
app.listen(PORT, function(){
  console.log("==========================")
  console.log(`LISTENING ON PORT ${PORT}`);
  console.log("==========================")
});