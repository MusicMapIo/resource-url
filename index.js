var url = require('url');

var resourceUrl = module.exports = function(path) {

	var resource = url.format({
		host: resourceUrl.host,
		pathname: path,
		protocol: resourceUrl.protocol
	});

	console.log(resource);

	return resource;
};

resourceUrl.host = typeof __MM !== 'undefined' ? __MM.host : null;
resourceUrl.protocol = typeof window !== 'undefined' ? window.location.protocol : 'http:';