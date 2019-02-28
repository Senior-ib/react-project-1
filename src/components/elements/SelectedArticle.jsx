import React from 'react';
import { Link } from 'react-router-dom';

const SelectedArticles = ({data}) => {
    return <div className="recent-lecture th-pl-med bl-gold-3">
    <Link href="#">
        <a>
        <div className="mb-3">
            <p className="mb-3">
                <i class='fa fa-book' style={{fontSize: 16}}></i>
                {data.articleTitle}
            </p>
        </div>
        <div className="flex bt-gray-1">
            <span className="mr-3"><i class='fa fa-calendar pr-1' style={{fontSize:16}}></i>{data.articleDate}</span>
            <span className="mr-3"><i className="fa fa-download pr-1"></i> {data.downloadedTime}</span>
        </div>
        </a>
    </Link>
</div>
}

export default SelectedArticles;
