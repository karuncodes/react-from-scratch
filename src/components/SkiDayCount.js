import { Component } from 'react'
import  { FaCalendar as Cal }  from 'react-icons/fa'
import  { MdTerrain as Pahaad }  from 'react-icons/md'
import  { TiWeatherSnow as SnowFlake }  from 'react-icons/ti'


const percentToDecimal = decimal => {
    return (( decimal * 100)+'%')
}

const calcGoalProgress = (total, goal) => {
    return percentToDecimal (total/goal)
}


export const SkiDayCount = ({ total, powder, backcountry, goal}) => (
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
    </div>
)