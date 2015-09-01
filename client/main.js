console.log('client/main.js: code from here only runs on the client')

import React from 'react'
import App from './components/App'

Meteor.startup(() => React.render(<App/>, document.getElementById('react-app')))
