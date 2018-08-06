import React from 'react'
import { render } from 'react-dom'
// import { SkiDayCount } from './components/SkiDayCount'
import { SkiDayList } from './components/SkiDayList'

window.React = React

render(
    <SkiDayList days="lots" />,
    document.getElementById("init-elem")
);

