import { NavLink } from 'react-router-dom'
import  {
    FaCalendar as Cal,
    FaHome as Home,
    FaTimesCircle as NotFound
}  from 'react-icons/fa'
import '../stylesheets/ui.scss'

export const NavigationMenu = () => {
    const style={
        background: 'aqua'
    };
    return <nav>
        <ul>
            <li>
                <NavLink exact to="/" className="highlighted" >
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
                <NavLink to="/add-day" activeStyle={style}>
                    add day form
                </NavLink>
            </li>
        </ul>
    </nav>
}