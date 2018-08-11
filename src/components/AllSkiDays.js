import { Component } from 'react'
import { Route } from 'react-router-dom'
import { SkiDayList } from './SkiDayList'

export class AllSkiDays extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Route exact path="/list-days" render={props => (
                        <SkiDayList days={this.props.days}/>
                )} />
                <Route path="/list-days/:filter" render={({match}) => (
                        <SkiDayList days={this.props.days} filter={match.params.filter}/>
                )} />
            </div>
        )
    }
}