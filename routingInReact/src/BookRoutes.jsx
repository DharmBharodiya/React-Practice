import React from 'react' 
import { Routes, Route } from 'react-router-dom'
import BookLayout from '../bookLayout'
import BookList from './pages/BookList'
import Book from './pages/Book'
import NewBook from './pages/Book'

function BookRoutes() {
  return (
    <>
    {/* if we will render booklayout like this then we will loose access to the outlet and context */}
    {/* <BookLayout />  */}
      <Routes>
        {/* using booklayout this way will enable us to use outlet and context */}
          <Route path="" element={<BookLayout />}>
          {/* here the index means it matches the actual root which is /books of the parent */}
          <Route index element={<BookList/>}></Route>
          {/* the :id will be substituted after the index route that will be /books/:id  */}
          <Route path=":id" element={<Book/> }></Route>
          <Route path="new" element={<NewBook/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default BookRoutes