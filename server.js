"use strict";

require('colors');

var express 	= require('express'),
	bodyParser  = require('body-parser'),
	http        = require('http'),
	path        = require('path'),
	serveStatic = require('serve-static'),
    api 		= require('./routes/api');

var app = express();
var server = http.createServer(app);

app.set('port', process.env.PORT || 3001);
app.use(serveStatic(path.join(__dirname, 'app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
	res.render('index');
}),

// JSON API
app.get('/server/api/voitures', api.fetchVoitures);
app.get('/server/api/voitures/:id', api.fetchVoiture);
app.post('/server/api/voitures', api.addVoiture);
app.put('/server/api/voitures', api.updateVoiture);
app.delete('/server/api/voitures/:id', api.deleteVoiture);


server.listen(app.get('port'), function() {
	console.log('✔︎︎ Express server listening on http://localhost:%d/'.green, app.get('port'));
});
