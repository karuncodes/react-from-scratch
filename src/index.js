import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { ErrorBoundary } from './components/ErrorBoundary'
import { BrowserRouter as Router } from 'react-router-dom'

window.React = React

render(
    <Router>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </Router>,
    document.getElementById("init-elem")
);