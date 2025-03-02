import React from 'react'

import Nav from '../../components/Nav/Nav.tsx'
import Contact from '../../components/Contact/Contact.tsx'
import Chat from '../../components/Chat/Chat.tsx'

const Main: React.FC = () => {
	return (
		<div className='flex'>
			<Nav />
			<Contact />
			<Chat />
		</div>
	)
}

export default Main
