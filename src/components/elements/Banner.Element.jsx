import React from 'react';
import './element.css';
import SearchElement from './SearchElement';
import { withRouter } from 'react-router-dom'

class Banner extends React.Component {    
    render() {
        const path = this.props.location.pathname;
        let banner;
        if (path == '/' || path == '/about' || path == '/articles' || path == '/ask' || path == '/contact') {
            banner = <div className="banner">
                <img src="/assets/hero-logo.png" className="banner-img" width="450px" />
                {path === '/' && <div className="bnr-search-div">
                    <SearchElement btnType="text" />
                    <div className="hidden md:block w-marquee gold-cl-fnt font-medium flex justify-center items-center text-secondary py-4">
                        <marquee
                            behavior
                            direction="left"
                        >JILSATUL-BASEERAH TO HOLD NEXT WEEK, 10AM @ MARINA PARK, LAGOS</marquee>
                    </div>            
                </div>}
            </div>
        } else {
            banner = ""
        }
            
        return (
            <div className="">
                {
                    banner
                }
            </div>
        )
    }
}

export default withRouter(Banner);