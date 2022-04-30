import React from 'react'
import Button from 'react-bootstrap/Button';
import '../style/Header.css'
import { FaFacebookF, FaTwitterSquare, FaLinkedin , FaUserAlt } from 'react-icons/fa'


const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
        <div className="container-fluid">
            <h1 className="nav-brand fs-3 text-end fw-bolder grText opacity-50 p-3">TA3AWONIYA</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 socials">
                <li className="nav-item d-inline">
                    <FaFacebookF role="button" className='d-inline mx-1' />
                </li>
                <li className="nav-item d-inline">
                    <FaTwitterSquare role="button" className='d-inline mx-1' />
                </li>
                <li className="nav-item d-inline">
                    <FaLinkedin role="button" className='d-inline mx-1 ' />
                </li>
            </ul>
            <ul className="navbar-nav mx-3 mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Store</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Cooperativess</a>
                </li>
                <li className="nav-item">
                <a className="nav-link " role="button">About Us</a>
                </li>
                <button className='nav-item btn border border-2 mx-1 mb-1 join_us'>Join Us</button>
            <button className='nav-item btn btn-outline-secondary mx-1 mb-1'><FaUserAlt className='px-1' />Login</button>
            </ul>
            </div>
        </div>
    </nav>
        
    )
}

export default Header