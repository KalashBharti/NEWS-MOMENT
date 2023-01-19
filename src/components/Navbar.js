import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
      <div>
         <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" style={{color:"#FF3D50"}} href="/">NEWS MOMENT</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="general">Home</Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="business">Business</Link></li>
               <li className="nav-item">
                <Link className="nav-link" to="entertainment">entertainment</Link></li>
               <li className="nav-item">
                <Link className="nav-link" to="general">General</Link></li>
               <li className="nav-item">
                <Link className="nav-link" to="health">Health</Link></li>
               <li className="nav-item">
                <Link className="nav-link" to="science">Science</Link></li>
               <li className="nav-item">
                <Link className="nav-link" to="sports">Sports</Link></li>
               <li className="nav-item">
                <Link className="nav-link" to="technology">Technology</Link></li>
            </ul>

            {/* drop down country bar */}
            <form className="d-flex" style={{marginRight:"5rem"}} role="search">
            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"#8AE8FF"}}>
            Country
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item" href="/">India</a></li>
            <li><a className="dropdown-item" href="/">United  action</a></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
            </form>
          </div>
        </div>
      </nav>
      </div>
    )
  }
}

export default Navbar
