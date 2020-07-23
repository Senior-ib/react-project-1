import React from 'react';
import { Link } from 'react-router-dom';
import './features/feature.css';

const NavbarMenu = (props) => {

    const toggleComponent = (component) => {
        const compToggle = document.getElementById(component);
        if(compToggle.style.display === 'block') {
            compToggle.style.display = 'none'
        } else {
            compToggle.style.display = 'block'
        }
    }

    return<div className={`navbar-menu ${props.styles}`}>
        <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" onClick={() => toggleComponent('navbarSupportedContent')}>
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav topnav">
                <li class="nav-item">
                    <Link class="nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/about">About Sheikh</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/ask">Ask Sheikh</Link>
                </li>
                <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle" onClick={() => toggleComponent('navbarDropdown')}>
                        Downloads
                    </Link>
                    <div class="dropdown-menu" id="navbarDropdown" onClick={() => toggleComponent('navbarDropdown')}>
                        <Link class="dropdown-item" to="/download">Carfax</Link>
                        <Link class="dropdown-item" to="/download">Carproof</Link>
                        <Link class="dropdown-item" to="/download">Omnivic</Link>
                    </div>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/articles">Articles</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
    </div>
}

export default NavbarMenu;
