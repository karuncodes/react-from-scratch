import { Component, Fragment } from 'react'
import { SkiDayCount } from './SkiDayCount'
import { SkiDayList } from './SkiDayList'
export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allSkiDays: [
                {}
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