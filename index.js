var http = require('http');
var requestIp = require('request-ip');
var { exec } = require('child_process');

http.createServer(function (req, res) {
	var clientIp = requestIp.getClientIp(req);
	console.log(clientIp);
	exec('bash /var/www/deploy/deploy.sh', (err, stdout, stderr) => {
		console.log('bash /var/www/deploy/deploy.sh');
		if (!err) {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('Deployed!');
		}
		else{
			res.writeHead(400, {'Content-Type': 'text/plain'});
			res.end('Error!');
		}
	});
}).listen(8080);
