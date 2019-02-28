import React from 'react';

import SelectedFatawa from '../elements/SelectedFatawa';

const SelectedFatawas = () => {
    const data = [
        {articleTitle: 'can a menstruating woman enter a masjid', articleDate:'13-06-2020',  downloadedTime: '1:06:31s'},
        {articleTitle: 'when is it neccessary for a man to marry another wife', articleDate:'13-06-2020',  downloadedTime: '1:06:31s'},
        {articleTitle: 'when is it neccessary for a man to marry another wife', articleDate:'13-06-2020',  downloadedTime: '1:06:31s'},
    ]
    return <div className="th-my-30 ml-4 feat-cont">
        <div className="feat-cont-hd bg-th-bl-4 th-wt-10 p-3 text-center text-white ft-sz-18 uppercase">selected fatwas</div>
        <div className="feat-cont-bd bg-gray-200 pt-8 th-min-h-50">
            {
                data.map((singleData, i) => {
                    return <div className="th-pt-4 w-full pr-6 cl-blk" key={i}>
                    <SelectedFatawa data={singleData} />
                </div>
                })
            }
        </div>
    </div>
}

export default SelectedFatawas;
