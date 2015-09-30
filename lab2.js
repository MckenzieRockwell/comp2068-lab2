var http= require('http');
var url = require('url');

var operands = { add:'+', subtract:'-', multiply:'*', divide:'/'};

http.createServer(function(req, res) {

	res.writeHead(200, {'Content-Type': 'text-plain'});

	var urlstuff = url.parse(req.url, true);
	var query = urlstuff.query;
	var method = query['method'];

	if( query['method']==="add" || query['method']==="subtract" || query['method']==="multiply" || query['method']==="divide"){

			var xval = query['x'];
			var yval = query['y'];
			var oper = operands[method];
			res.write(xval+" "+oper+" "+yval+" = "+eval(xval+oper+yval));
			res.end();

	}else{
			res.end("Error, method parameter not valid");
	}
  
}).listen(3000);
