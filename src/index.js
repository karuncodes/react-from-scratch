import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { ErrorBoundary } from './components/ErrorBoundary'
import { HashRouter as Router } from 'react-router-dom'

window.React = React

render(
    <ErrorBoundary>
        <Router>
            <div>
                <App />
            </div>
        </Router>
    </ErrorBoundary>,
    document.getElementById("init-elem")
);

