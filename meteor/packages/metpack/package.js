Package.describe({
  name: 'firegoby:metpack',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'proxy /build/client/* requests to webpack-dev-server on port 9000',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/firegoby/metpack',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('webapp', 'server');
  api.use('jquery', 'client');
  api.addFiles('metpack.server.js', 'server');
  api.addFiles('metpack.client.js', 'client');
});

Npm.depends({
  'request': '2.55.0'
});
