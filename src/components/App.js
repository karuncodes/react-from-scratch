import { Fragment, Component } from 'react'
import { SkiDayCount } from './SkiDayCount'
import { AllSkiDays } from './AllSkiDays'
import { MemberList } from './MemberList'
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
            }]
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
                <Route path="/show-members" component={MemberList} />
                <Route component={Whoops404} />
            </Switch>
        </Fragment>)
    }
}

            // members: [{
            //     admin: true,
            //     name: "SalPal",
            //     thumbnail: "https://avatars1.githubusercontent.com/u/13069255",
            //     email: "karun.developer@gmail.com",
            //     makeAdmin: function() { console.log("user hit", this.name) }
            // },
            // {
            //     admin: false,
            //     name: "Eve Porcello",
            //     thumbnail: "https://avatars1.githubusercontent.com/u/4429852",
            //     email: "eve@moonhighway.com",
            //     makeAdmin: () => { console.log("user hit", this.name) }
            // },
            // {
            //     admin: false,
            //     name: "Alex Banks",
            //     thumbnail: "https://avatars3.githubusercontent.com/u/5952082",
            //     email: "alex@moonhighway.com",
            //     makeAdmin: () => { console.log("user hit", this.name) }
            // }]