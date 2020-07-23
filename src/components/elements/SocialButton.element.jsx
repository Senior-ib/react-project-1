import React from 'react';
import { Link } from 'react-router-dom';

const SocialButton = ({social}) => {
    return <div className="ml-3 my-3" >
        <Link to="#">
            <button className={`bg-socio-icons-${social.bg_color} py-2 px-3 text-white`}>
                <i className={`fa fa-${social.name}`} style={{fontSize:22, color:"#fff"}}></i>
            </button>
        </Link>
    </div>
}

export default SocialButton;
