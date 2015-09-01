import React from 'react'

export default React.createClass({

    mixins: [ReactMeteorData],

    getMeteorData() {
        return {
            backend: 'Meteor'
        }
    },

    render() {
        let isHotLoaded = window.webpackHotUpdate != undefined ? ' and React Hot Loader!' : ''
        return <h1>React is now working with {this.data.backend} via Webpack {isHotLoaded}</h1>
    }
})
