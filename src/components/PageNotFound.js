import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="container" >
        <h2 className="text-center" >Page Not Found</h2>
        <Link to="/" >Back To Home</Link>
    </div>
  )
}

export default PageNotFound;