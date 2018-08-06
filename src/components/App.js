import { Component, Fragment } from 'react'
import { SkiDayCount } from './SkiDayCount'
import { SkiDayList } from './SkiDayList'
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
    render() {
        return (<Fragment>
                    <SkiDayCount total={20} goal={50} />
                    <SkiDayList days={this.state.allSkiDays} />
                </Fragment>)

    }
}