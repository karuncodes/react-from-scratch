import { Component } from 'react'
import { Route } from 'react-router-dom'
import { SkiDayList } from './SkiDayList'

export class AllSkiDays extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allSkiDays: [
                {
                    resort: "Mt Everest",
                    date: new Date("3/2/2018"),
                    powder: true,
                    backcountry: false
                },
                {
                    resort: "hotel kirkwood",
                    date: new Date("4/12/2018"),
                    powder: false,
                    backcountry: false
                },
                {
                    resort: "hotel transylvania",
                    date: new Date("6/1/2018"),
                    powder: true,
                    backcountry: true
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <Route exact path="/list-days" render={props => (
                        <SkiDayList days={this.state.allSkiDays}/>
                )} />
                <Route path="/list-days/:filter" render={({match}) => (
                        <SkiDayList days={this.state.allSkiDays} filter={match.params.filter}/>
                )} />
            </div>
        )
    }
}