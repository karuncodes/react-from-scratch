import React from 'react'

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    componentDidCatch (error, info) {
        this.setState({hasError: true});
        console.log("component catch", error, info);
    }
    render() {
        if(this.state.hasError) {
            return (<h2> Something went wrong </h2>)
        }
        return this.props.children;
    }
}