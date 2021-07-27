import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = ()=>{
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Render.io</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="#">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="#">Team</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="#">Technology</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="#">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navigation;