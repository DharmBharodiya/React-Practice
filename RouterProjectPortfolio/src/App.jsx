import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route element={<Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}>
         <Route path='/' element={<Home />}/>
         <Route path="/about" element={<About />}/>
         <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route
          path='/contact'
          elements={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

  )
}


export default App