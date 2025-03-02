import { Routes, Route } from 'react-router'

import Main from './Main/Main.tsx'
import SignIn from './SignIn/SignIn.tsx'
import Login from './Login/Login.tsx'
import NotFound from './NotFound/NotFound.tsx'

export default function Router() {
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
