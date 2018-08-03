import React from 'react'
import text from './titles.json'
import './stylesheets/hello.css'
import './stylesheets/goodbye.scss'

export const hello = (
    <h1 id="title"
    className='hello'
    style={{backgroundColor: "purple", color: "yellow"}}> 
        {text.hello}
    </h1>
)

export const goodbye = (
    <h1 id="title" className='goodbye' style={{backgroundColor: "yellow", color: "purple"}}> {text.goodbye}</h1>
)