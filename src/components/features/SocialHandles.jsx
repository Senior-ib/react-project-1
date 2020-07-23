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

    let SocialHandles;
    if (props.isRow) {
        SocialHandles = <div className="soc-hand th-flex order-2 th-mt-4">
        {
            mySocialHandles.map((socialHandle, i) => {
                return <SocialButton social={{...socialHandle, bg_color: 'blue'}} key={i} />
            })
        }
    </div>
    } else if (props.isColumn) {
        SocialHandles = <div className="soc-hand">
            {
                mySocialHandles.map((socialHandle, i) => {
                    return <SocialButton social={{...socialHandle, bg_color: 'grey'}} key={i} />
                })
            }
        </div>
    }
    return <div>
        {
            SocialHandles
        }
    </div>
}

export default SocialHandles;
