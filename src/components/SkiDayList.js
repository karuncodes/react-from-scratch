import { SkiDayRow } from './SkiDayRow';
import { PropTypes } from 'prop-types'


export const SkiDayList = ({days}) => (
    <table style={{border: '1px solid black'}}>
        <thead>
            <tr>
                <th> Date</th>
                <th> Resort</th>
                <th> Powder</th>
                <th> BackCountry</th>
            </tr>
        </thead>
        <tbody>
            {days.map((day, i ) => {
                return (<SkiDayRow key={i}
                            {...day} />)
            })}
        </tbody>
    </table>

)

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