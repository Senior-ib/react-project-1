import React from 'react';

const stats = ({stats}) => {
    return <div className="">
        <div className="mx-6">
            <p className="mb-3">You're <span className="th-gold" >No {stats.noOfVisitor} visitor</span></p>
            <p className="mb-3"><span className="th-gold" >{stats.noOfQuestion}</span> Questions</p>
            <p className="mb-3"><span className="th-gold" >{stats.noOfAnswer}</span> Answers</p>
        </div>
    </div>
}

export default stats;
