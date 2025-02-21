import { Routes, Route } from 'react-router'

import Main from './src/pages/Main/Main.tsx';
import SignIn from './src/pages/SignIn/SignIn.tsx';
import Login from './src/pages/Login/Login.tsx';
import NotFound from './src/pages/NotFound.tsx'

export default function router() {
  return (
    <> 
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
  </>
  )
}
