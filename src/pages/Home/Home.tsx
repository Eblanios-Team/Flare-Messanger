import React from 'react';
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <Link to={'/login'} className="text-orange font-semibold ml-4">Login an account</Link>
      <Link to={'/sign-in'} className="text-orange font-semibold ml-4">Create an account</Link>
    </div>
  )
}

export default Home