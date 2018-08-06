import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { ErrorBoundary } from './components/ErrorBoundary'

window.React = React

render(
    <ErrorBoundary><App /></ErrorBoundary>,
    document.getElementById("init-elem")
);

