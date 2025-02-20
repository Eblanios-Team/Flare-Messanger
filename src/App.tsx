import SignIn from './pages/SignIn/SignIn.tsx';
import Login from './pages/Login/Login.tsx';
import Home from './pages/Home/Home.tsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* Здесь предполагается использование react-router для маршрутизации */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
