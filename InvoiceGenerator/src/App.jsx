import {Routes, Route} from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";

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