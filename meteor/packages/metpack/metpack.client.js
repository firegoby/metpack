// include a link to the bundle served by webpack-dev-server
// in production mode this is auto-concatenated from /meteor/build/client/
Meteor.startup(function() {
  if (Meteor.settings.public.metpack === 'DEVELOPMENT') {
    var devScript = document.createElement('script');
    devScript.type = 'text/javascript';
    devScript.src = '/build/client/bundle.js';
    document.head.appendChild(devScript);
  }
});
