import React from 'react'
import Button from 'react-bootstrap/Button';
import './Header.css'
import { FaFacebookF, FaTwitterSquare, FaLinkedin } from 'react-icons/fa'


const Header = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light border border-2">
        <div class="container-fluid">
            <h1 className="nav-brand fs-3 text-end fw-bolder grText opacity-50 p-3">TA3AWONIYA</h1>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 socials">
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
            <ul class="navbar-nav mx-3 mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Store</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Cooperatives</a>
                </li>
                <li class="nav-item">
                <a class="nav-link " role="button">About Us</a>
                </li>
                <button className='nav-item btn border border-2 mx-1 mb-1 join_us'>Join Us</button>
            <button className='nav-item btn btn-outline-secondary mx-1 mb-1'><FaLinkedin />Login</button>
            </ul>
            </div>
        </div>
    </nav>
        
    )
}

export default Header