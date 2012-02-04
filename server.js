var express = require('express'),
uuid = require('node-uuid'); //https://github.com/broofa/node-uuid
var _ = require('underscore')._;

app = module.exports = express.createServer();
//app = express.createServer();

app.configure(function(){
	app.use(express.methodOverride());
	app.use(express.bodyParser());
	app.use(app.router);
	//app.set('views', __dirname + '/public');
    app.use(express.static(__dirname + '/public'));
});

app.get("/", function(req, res){
	res.sendfile(__dirname + "/index.html");
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
