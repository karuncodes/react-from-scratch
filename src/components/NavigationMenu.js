import { NavLink } from 'react-router-dom'
import  {
    FaCalendar as Cal,
    FaHome as Home,
    FaTimesCircle as NotFound
}  from 'react-icons/fa'

export const NavigationMenu = () => {
    const style={
        background: 'aqua'
    };
    return <nav>
        <ul>
            <li>
                <NavLink exact to="/" activeStyle={style}>
                    <Home />
                    SkiDayCount
                </NavLink>
            </li>
            <li>
                <NavLink to="/list-days" activeStyle={style}>
                    <Cal />
                    SkiDayList
                </NavLink>
            </li>
            <li>
                <NavLink to="/boo" activeStyle={style}>
                    <NotFound />
                    404
                </NavLink>
            </li>
        </ul>
    </nav>
}