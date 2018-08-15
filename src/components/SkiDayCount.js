import  { FaCalendar as Cal }  from 'react-icons/fa'
import  { MdTerrain as Pahaad }  from 'react-icons/md'
import  { TiWeatherSnow as SnowFlake }  from 'react-icons/ti'
import  { PropTypes } from 'prop-types'
import KK from '../static/images/kk.jpg'
// NOTICE: i have added validation using proptypes but still,
// I will receive isRequired warnings even though I have default values
// that means: using component this props need to be passesd


const percentToDecimal = decimal => {
    return (( decimal * 100)+'%')
}

const calcGoalProgress = (total, goal) => {
    return percentToDecimal (total/goal)
}


export const SkiDayCount = ({ total = 70, powder = 10 , backcountry =15 , goal= 30}) => (
    <div className="ski-day-count">
        <div className="total-days">
            <span>{total}</span>
            <Cal />
            <span>days</span>
        </div>
        <div className="powder-days">
            <span>{powder}</span>
            <SnowFlake />
            <span>days</span>
        </div>
        <div className="backcountry-days">
            <span>{backcountry}</span>
            <Pahaad />
            <span>days</span>
        </div>
        <div>
            <span>
                {calcGoalProgress(total, goal)}
            </span>
        </div>
        <footer>
        <br /><br /><br /><br /><br />
            <span>Copyright 2018 - Karun</span>
            <div><img style={{
                width: '80px'
            }} src={KK} /></div>
        </footer>
    </div>
)

// Adding Validation using PropTypes

SkiDayCount.propTypes = {
    total: PropTypes.number.isRequired,
    backcountry: PropTypes.number,
    powder: PropTypes.number,
    goal: PropTypes.number
}

// whenever class initialize: instance created with below default props.

// SkiDayCount.defaultProps = {
//     total: 69,
//     powder: 12,
//     backcountry: 23,
//     goal: 15
// }