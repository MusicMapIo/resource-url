var url = require('url');

var resourceUrl = module.exports = function(path) {

	var resource = url.format({
		host: resourceUrl.host,
		pathname: path,
		protocol: resourceUrl.protocol
	});

	return resource;
};