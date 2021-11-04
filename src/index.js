const express = require('express');
const app = express();

app.get('/', function(req, res){
	res.send("HELO WORLD FORM HEROKU !!!")
})

app.listen(process.env.PORT || 5000);