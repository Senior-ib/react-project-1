import React from 'react';

import SelectedArticle from '../elements/SelectedArticle';

const SelectedArticleContainer = (prop) => {
    const data = [
        {articleTitle: 'q/a with sheikh dr. sharafuddeen gbadebo raaji by abu aa\'isha al-odeomiyy', articleDate:'13-06-2020',  downloadedTime: '1:06:31s'},
        {articleTitle: 'q/a with sheikh dr. sharafuddeen gbadebo raaji by abu aa\'isha al-odeomiyy', articleDate:'13-06-2020',  downloadedTime: '1:06:31s'},
        {articleTitle: 'q/a with sheikh dr. sharafuddeen gbadebo raaji by abu aa\'isha al-odeomiyy', articleDate:'13-06-2020',  downloadedTime: '1:06:31s'}
    ]
    return <div className="ml-4 th-my-30 feat-cont">
        <div className="feat-cont-hd bg-th-bl-4 th-wt-10 p-3 text-center text-white ft-sz-18 uppercase">selected articles/book</div>
        <div className="feat-cont-bd bg-gray-200 pt-8 th-min-h-50">
            {
                data.map((singleData, i) => {
                    return <div className="th-pt-4 mb-4 pr-6 cl-blk" key={i}>
                    <SelectedArticle data={singleData} />
                </div>
                })
            }
        </div>
    </div>
}

export default SelectedArticleContainer;
