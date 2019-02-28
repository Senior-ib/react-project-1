import React from 'react';
import SocialButton from '../elements/SocialButton.element';
import './feature.css';

const SocialHandles = (props) => {
    let mySocialHandles = [
        {name: "instagram", uri:"#"},
        {name: "facebook", uri:"#"},
        {name: "twitter", uri:"#"},
        {name: "youtube", uri:"#"}
    ]

    return (
        <div className="soc-hand th-flex order-2 th-mt-4">
        {
            mySocialHandles.map((socialHandle, i) => {
                return <SocialButton social={socialHandle} key={i} />
            })
        }
    </div>
    )
}

export default SocialHandles;
