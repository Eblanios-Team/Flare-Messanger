import React from 'react';

import Nav from '../../components/Nav/Nav.tsx'
import Contact from '../../components/Contact/Contact.tsx'

const Main: React.FC = () => {
  return (
    <div className='flex'>
        <Nav />
        <Contact />
    </div>
  )
}

export default Main