import React from 'react';
import { Link } from 'react-router-dom';
import './features/feature.css';

const NavbarMenu = () => {

    const toggleComponent = (component) => {
        const compToggle = document.getElementById(component);
        if(compToggle.style.display === 'block') {
            compToggle.style.display = 'none'
        } else {
            compToggle.style.display = 'block'
        }
    }

    return<div className="navbar-menu">
        <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" onClick={() => toggleComponent('navbarSupportedContent')}>
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav topnav">
                <li class="nav-item active">
                    <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
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
                    <div class="dropdown-menu" id="navbarDropdown">
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

    <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Customer Sign In</h4>
                    <button type="button" class="close" data-dismiss="modal">×</button>
                </div>

                <div class="modal-body">
                    <form>
                        <label class="sr-only" for="usrname">Username</label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-user"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>


                        <label class="sr-only" for="Password">Name</label>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon2"><i class="fa fa-key"></i></span>
                            </div>
                            <input id="Password" type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
            

    </nav>
    </div>
}

export default NavbarMenu;
