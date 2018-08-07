import { SkiDayRow } from './SkiDayRow';
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

export const SkiDayList = ({days, filter}) => {
    const filteredDays = (!filter || !filter.match(/(powder|backcountry)/)) ? 
    days :
    days.filter(day => day[filter]);

    return (<table style={{border: '1px solid black'}}>
        <thead>
            <tr>
                <th> Date</th>
                <th> Resort</th>
                <th> Powder</th>
                <th> BackCountry</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <Link to="/list-days">
                        All Days
                    </Link>
                </td>
                <td>
                    <Link to="/list-days/powder">
                        Powder Days
                    </Link>
                </td>
                <td>
                    <Link to="/list-days/backcountry">
                        Backcountry Days
                    </Link>
                </td>
            </tr>
            {filteredDays.map((day, i ) => {
                return (<SkiDayRow key={i}
                            {...day} />)
            })}
        </tbody>
    </table>)
}

SkiDayList.propTypes = {
    days: function(props) {
        if(!Array.isArray(props.days)) {
            return new Error(
                "SkiDayList should be an array"
            )
        }
        else if (!props.days.length) {
            return new Error(
                "SkiDayList must have atleast one record"
            )
        }
        else {
            return null
        }
    }
}