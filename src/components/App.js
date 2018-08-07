import { Component, Fragment } from 'react'
import { SkiDayCount } from './SkiDayCount'
import { SkiDayList } from './SkiDayList'
import { Whoops404 } from './Whoops404'
import { NavigationMenu } from './NavigationMenu'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
export class App extends Component {
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

    // countDays (filter) {
    //     const { allSkiDays } = this.state
    //     return allSkiDays.filter(
    //         (day) => (filter) ? day[filter] : day ).length
    // }

    render() {
        return  <Fragment>
                    <Switch>
                        <Route exact path="/" render={props => (
                                <SkiDayCount total= {25} />
                        )} />
                        <Route exact path="/list-days" render={props => (
                                <SkiDayList days={this.state.allSkiDays}/>
                        )} />
                        <Route path="/list-days/:filter" render={({match}) => (
                                <SkiDayList days={this.state.allSkiDays} filter={match.params.filter}/>
                        )} />
                        <Route component={Whoops404} />
                    </Switch>
                    <NavigationMenu />
                </Fragment>
    }
}