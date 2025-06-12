import {Route, Routes, Link, NavLink} from "react-router-dom"
import Home from "./pages/Home.jsx";
import BookList from "./pages/BookList.jsx";
import Book from "./pages/Book.jsx";
import NewBook from "./pages/NewBook.jsx";
import NotFound from "./pages/NotFound.jsx";
import BookLayout from "../bookLayout.jsx";
import BookRoutes from "./BookRoutes.jsx";
import AlternativeRoute from "./AlternativeRoute.jsx";

function App(){
  return (
  <>
  {/* <Routes location="/books">
    <Route path="/books/" element={<h1>Extra content</h1>} />
  </Routes> */}
    {/* <AlternativeRoute /> */}
    <nav>
      <ul>
        <li>
          {/* the style prop recieves func with an object argument {isActive} the children recives it as a boolean */}
          <NavLink to="/" style={({isActive})=>{
            return isActive ? {color : "red"} : {color: "blue"}
          }} >
            {({isActive}) => {
              return isActive ? "Active home" : "home"
            }}
          </NavLink>
        </li>
        {/* <li>
          <Link to="/">Home</Link>
        </li> */}
        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>
    </nav>
    <Routes>
          <Route path="/" element={<Home/>} />
          {/* nested routes */}

          {/* the element passed in the parent route element will be rendered for all the routes inside it, so for /books, /books/:id and /books/new for all these routes the booklayout componenet will be rendered */}
          {/* but as we render booklayout we will see that nothing else spcific to other routes would be rendered, hence inside booklayout component we add a tag called <Outlet/> which will take care of that */}
          {/* {<Route path="/books" element={<BookLayout />}> */}
            {/* here the index means it matches the actual root which is /books of the parent */}
            {/* <Route index element={<BookList/>}></Route> */}
            {/* the :id will be substituted after the index route that will be /books/:id  */}
            {/* <Route path=":id" element={<Book/> }></Route> */}
            {/* <Route path="new" element={<NewBook/>}></Route> */}
          {/* </Route> */}

          {/* <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<Book />}/>
          <Route path="/books/new" element={<NewBook />}/> */}

            {/* This means:
    When the URL matches /books or anything after /books/, render the BookRoutes component. */}

          <Route path="/books/*" element={<BookRoutes />}></Route>

          <Route path="*" element={<NotFound/>}/>
    </Routes>
  </>
  )
}


export default App;