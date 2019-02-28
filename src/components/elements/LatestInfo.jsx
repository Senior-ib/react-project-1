import React from 'react';

const LatestInfo = (props) => {
    return <div className="latest-info-div">
        <div className="mixlr-live lg:col-span-9 self-stretch lg:bg-primary">
       <iframe src="https://mixlr.com/users/8160163/embed?color=c7a105" width="100%" height="180px" scrolling="no" frameborder="no" marginheight="0" marginwidth="0"></iframe><small class="hidden lg:block text-white px-4 py-3 bg-primary-dark"><a href="https://mixlr.com/drsharaff" style={{textAlign:"left", fontFamily:"Helvetica", fontSize:11}}>drsharaff is on Mixlr</a></small>
      </div>
        <div className="flex latest">
            <h5 className="p-2 latest-h">Latests</h5>
            <div className='latest-info bg-gray-200'>{props.latestInfo} latest info</div>
        </div>
    </div>
}

export default LatestInfo;
