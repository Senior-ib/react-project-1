import React from 'react';

const AudioPlayer = (props) => {    
    let list;
    if(props.lecture && props.lecture.length > 0) {
        list = props.lecture.map((item, i) => {
            return (
                <div className="audio-player mb-5 mx-5 p-4">
                    <audio className="mb-5 mx-5" controls="controls">
                        <source src={`/assets/audio/${item.title}`} />
                    </audio>
                    <h5>{item.title}</h5>
                </div>
            )
        })
    } else {
        list = <h5>We are sorry, there is no lecture available</h5>
    }
        
    return <div>
        {list}
    </div>
}

export default AudioPlayer;
