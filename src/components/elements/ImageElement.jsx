import React from 'react';

const ImageElement = ({imgData}) => {
    return <div className="img-elem mx-6">
        <img className="responsive" src={`/assets/${imgData.image}`} alt={`${imgData.image} image`} />
    </div>
}

export default ImageElement;
