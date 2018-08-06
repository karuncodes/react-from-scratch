import  { FaCalendar as Cal }  from 'react-icons/fa'
import  { MdTerrain as Pahaad }  from 'react-icons/md'
import  { TiWeatherSnow as SnowFlake }  from 'react-icons/ti'
import { PropTypes } from 'prop-types'

export const SkiDayRow = ({resort, date, powder, backcountry}) => (
<tr>
    <td>
        {date.getMonth()+1 }/{date.getDate()}/{date.getFullYear()}
    </td>
    <td>
        {resort}
    </td>
    <td>
        {(powder)? <SnowFlake /> : null }
    </td>
    <td>
        {(backcountry)? <Pahaad /> : null }
    </td>
</tr>
)

SkiDayRow.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    powder: PropTypes.bool,
    backcountry: PropTypes.bool
}