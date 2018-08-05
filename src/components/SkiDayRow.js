import  { FaCalendar as Cal }  from 'react-icons/fa'
import  { MdTerrain as Pahaad }  from 'react-icons/md'
import  { TiWeatherSnow as SnowFlake }  from 'react-icons/ti'

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