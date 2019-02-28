import React from 'react';

const SearchElement = (props) => {
    return <div className="">
        <form className="flex s-e-form">
            <input className="bg-gray-400" type="text" />
            <button type="button w-2/12" className="th-bg-gold text-white focus:outline-none">
                {props.btnType === "icon" && <i class='fa fa-search' style={{fontSize:24}}></i>}
                {props.btnType === "text" && <span className="uppercase p-4">Search</span>}
            </button>
        </form>
    </div>
}

export default SearchElement;
