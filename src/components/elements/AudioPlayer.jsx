import React from 'react';

const AudioPlayer = (props) => {    
    let list;
    if(props.lecture && props.lecture.length > 0) {
        list = props.lecture.map((item, i) => {
            return (
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                    <div className=" th-comp-hgt audio-player">
                        <audio className="" controls="controls">
                            <source src={`/assets/audio/${item.title}`} />
                        </audio>
                        <h5>{item.title}</h5>
                    </div>
                </div>
            )
        })
    } else {
        list = <h5>We are sorry, there is no lecture available</h5>
    }
        
    return <div className="row">
        {list}
    </div>
}

export default AudioPlayer;
