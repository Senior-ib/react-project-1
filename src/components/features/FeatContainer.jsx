import React from 'react';

import RecentLecture from '../elements/RecentLecture';

const FeatContainer = (props) => {
    const data = [
        {lectureType: 'online class', lectureTitle: 'kindness to the parent', bookTitle: 'Adabul-mufrad', lectureDate:'13-06-2020', lectureLanguage: 'yoruba', lectureDuration: '1:06:31s'},
        {lectureType: 'online class', lectureTitle: 'kindness to the parent', bookTitle: 'Adabul-mufrad', lectureDate:'13-06-2020', lectureLanguage: 'yoruba', lectureDuration: '1:06:31s'}
    ]
    return <div className="my-5 ml-4 feat-cont">
        <div className="feat-cont-hd bg-th-bl-4 th-wt-10 py-3 text-center text-white ft-sz-18 uppercase">recent lectures</div>
        <div className="feat-cont-bd bg-gray-200 pt-8 th-min-h-50 row">
            {
                data.map((singleData, i) => {
                    return <div className="th-pt-4 col-md-6 no-pr pr-6 cl-blk" key={i}>
                    <RecentLecture data={singleData} />
                </div>
                })
            }
        </div>
    </div>
};

export default FeatContainer;
