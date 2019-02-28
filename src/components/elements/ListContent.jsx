import React from 'react';

const ListContent = ({categories}) => {
    let listItem
    if (categories && categories.length > 0) {
        listItem = <ul className="list-cont">
        {
            categories.map((category, i) => {
            return <li className="bb-list" key={i}>{category}</li>
            })
        }
    </ul>
    } else {
        listItem = <h6 className="px-5">no categories</h6>
    }
    return <div>
        {
            listItem
        }
    </div>
}

export default ListContent;
