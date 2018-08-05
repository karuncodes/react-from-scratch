import  { FaCalendar as Cal }  from 'react-icons/fa'
import  { MdTerrain as Pahaad }  from 'react-icons/md'
import  { TiWeatherSnow as SnowFlake }  from 'react-icons/ti'
import { SkiDayRow } from './SkiDayRow';

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
                console.log("day");
                return (<SkiDayRow key={i}
                            {...day} />)
            })}
        </tbody>
    </table>

)