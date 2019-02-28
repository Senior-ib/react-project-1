import React from 'react';

const SideCont = (props) => {
    return <div className="side-cont mb-4">
        <div className="side-cont-head bg-th-bl-4 text-center text-white uppercase py-3">{props.head}</div>
        <div className="side-cont-body bg-gray-200">
            {props.children}
        </div>
    </div>
}

export default SideCont
