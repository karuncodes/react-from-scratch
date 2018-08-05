import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/SkiDayCount'
// import { SkiDayList } from './components/SkiDayList'

window.React = React

// passing props while using component removes 'PropTypes' validation warnings 

render (
    <SkiDayCount total={80} goal={150} />,
    document.getElementById("init-elem")
)
// render(
//     <SkiDayList days={
//         [
//             {
//                 resort: "hotel transylvania",
//                 date: new Date("3/2/2018"),
//                 powder: true,
//                 backcountry: false
//             },
//             {
//                 resort: "hotel kirkwood",
//                 date: new Date("4/12/2018"),
//                 powder: false,
//                 backcountry: false
//             },
//             {
//                 resort: "hotel transylvania",
//                 date: new Date("6/1/2018"),
//                 powder: true,
//                 backcountry: true
//             }
//         ]
//     } />,
//     document.getElementById("init-elem")
// );

