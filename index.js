var http = require('http');
var { exec } = require('child_process');

http.createServer(function (req, res) {
	//Token to match on CI/CD pipeline settings
	//Change the token on both side from time to time
	if(req.url.includes("token=888000")){
		exec(`bash ${__dirname}/deploy.sh`, (err, stdout, stderr) => {
			console.log(`bash ${__dirname}/deploy.sh`);
			if (!err) {
				res.writeHead(200, {'Content-Type': 'text/plain'});
				res.end('Deployed!');
			}
			else{
				res.writeHead(400, {'Content-Type': 'text/plain'});
				res.end('Error!');
			}
		});
	}
	else{
		res.writeHead(400, {'Content-Type': 'text/plain'});
		res.end('Error!');
	}
}).listen(8080);
