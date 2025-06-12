import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function BookLayout() {
  return (
    <>
        <Link to="/books/1"> Book 1 </Link>
        <br />
        <Link to="/books/2"> Book 2 </Link>
        <br />
        <Link to="/books/new"> new book</Link>
        {/* we can give context to all the paths inside the parent route in which outlet is defined, this context can be accessed in the elements present inside the child paths, by the method called as useOutletContext() */}
        <Outlet context={{hello: "World", dharm: "legend"}}/>
    </>
  )
}

export default BookLayout