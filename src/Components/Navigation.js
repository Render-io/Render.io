import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navigation = ()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">Render.io</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBars} />
            </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="#">About</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="#">Team</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="#">Technology</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="#">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        </nav>
        </>
    )
}

export default Navigation;