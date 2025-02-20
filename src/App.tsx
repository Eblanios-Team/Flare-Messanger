import SignIn from './pages/SignIn/SignIn.tsx'
import Login from "./pages/Login/Login.tsx"
import Home from "./pages/Home/Home.tsx"
import {Route, Routes} from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  )
}


export default App