import {Routes, Route} from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import LoginPage from "./pages/LoginPage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import InvoicePage from "./pages/InvoicePage.jsx";

const App = () => {
  return(

    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path='/invoice' element={
        <ProtectedRoute>
          <InvoicePage />
        </ProtectedRoute>
      }/>
      <Route path="*" element={<LoginPage/>} />
    </Routes>

  )
}

export default App;