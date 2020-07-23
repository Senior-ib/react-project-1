import React from 'react';
import NavbarElement from '../Navbar';
import { Link } from 'react-router-dom';
import SocialHandles from '../features/SocialHandles';

const FooterTop = () => {
    const year = new Date().getFullYear();
    return <div>
        <NavbarElement styles="navbar-footer-menu" />
        <div className="footer flex footer-bottom">
            <div className="copy-right">
                <span>&copy;{year}</span> | <Link href="/about"><a>About Us</a></Link>
            </div>
            <SocialHandles />
        </div>
    </div>
}

export default FooterTop;
