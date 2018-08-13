import { Fragment, Component } from 'react'
import { SkiDayCount } from './SkiDayCount'
import { AllSkiDays } from './AllSkiDays'
import { Member } from './Member'
import { Whoops404 } from './Whoops404'
import { NavigationMenu } from './NavigationMenu'
import { Route, Switch } from 'react-router-dom'
import { AddDayForm } from './AddDayForm';

export class App  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allSkiDays: [{
                resort: "hotel transylvania",
                date: "2010-03-12",
                powder: true,
                backcountry: true
            }],
            member: {
                admin: true,
                name: "Sal Pal Aal",
                thumbnail: "https://avatars0.githubusercontent.com/u/13069255",
                email: "karun.developer@gmail.com"
            }
        }
        this.addDay = this.addDay.bind(this);
    }
    addDay(skiDay) {
        this.setState({
            allSkiDays: [
                ...this.state.allSkiDays,
                {
                    resort: skiDay.resort,
                    date: skiDay.date,
                    powder: skiDay.powder,
                    backcountry: skiDay.backcountry
                }
            ]
        })
    }
    render () {
        return (<Fragment>
            <NavigationMenu />
            <hr />
            <Switch>
                <Route exact path="/" render={props => (
                        <SkiDayCount total= {25} />
                )} />
                <Route path="/list-days" render={props => (
                        <AllSkiDays days={this.state.allSkiDays} />
                )} />
                <Route exact path="/add-day" render={props => (
                        <AddDayForm onNewDay={this.addDay} />
                    )} />
                <Route path="/show-members" render={props => (
                        <Member member={this.state.member} />
                )} />
                <Route component={Whoops404} />
            </Switch>
        </Fragment>)
    }
}