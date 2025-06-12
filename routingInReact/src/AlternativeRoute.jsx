import React from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom'
import BookLayout from '../bookLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function AlternativeRoute() {


    let element = useRoutes([
        {
            path: "/",
            element: <BookLayout/>,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "about",
                    element: <About />
                },
                {
                    path: "contact",
                    element: <Contact />
                }
            ]
        }
    ])

    return AlternativeRoute;

}

export default AlternativeRoute