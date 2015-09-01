if (Meteor.settings.public.metpack === 'DEVELOPMENT') {
  var request = Npm.require('request');
  WebApp.connectHandlers.use("/build/client/", function(req, res, next) {
    var handleProxyError = function(err) {
      console.error(err);
      console.log('firegoby:metpack: make sure webpack-dev-server is running on port 9000, run `npm start` or `npm run watch-client` to start it');
    }
    req.pipe(request('http://0.0.0.0:9000/build/client/' + req.url))
      .on('error', handleProxyError)
      .pipe(res)
      .on('error', handleProxyError)
  });
}
