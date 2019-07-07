import React from 'react'

function About() {
    return (
        //you don't need a div but the stuff needs to be contained in a element
        <React.Fragment>
            <h1>About</h1>
            <p>This is a TodoList application used to practice React.js. This application also makes use of jsonplaceholder, Axios, and React Router</p>
            <p>v1.0.0</p>
        </React.Fragment>
    )
}

export default About;