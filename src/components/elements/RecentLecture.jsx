import React from 'react';
import { Link } from 'react-router-dom';

const RecentLecture = ({data}) => {
    return <div className="recent-lecture th-pl-med bl-gold-3">
        <Link href="#">
            <div className="mb-3">
                <p className="mb-3">
                    <i class='fa fa-book' style={{fontSize: 16}}></i>
                    {data.lectureType}
                </p>
                <p className="mb-3">
                    <i class='fa fa-microphone' style={{fontSize:16}}></i>
                    {data.lectureTitle}</p>
                <p className="mb-3">
                    <i class='fa fa-book' style={{fontSize: 16}}></i>
                    {data.bookTitle}</p>
            </div>
            <div className="flex bt-gray-1">
                <span className="mr-3"><i class='fa fa-calendar pr-1' style={{fontSize:16}}></i>{data.lectureDate}</span>
                <span className="mr-3"><i className="fa fa-code-fork pr-1" style={{fontSize: 16}}></i>{data.lectureLanguage}</span>
                <span className="mr-3"><i className="fa fa-clock-o pr-1"></i> {data.lectureDuration}</span>
            </div>
        </Link>
    </div>
}

export default RecentLecture;
