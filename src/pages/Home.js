
import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom";


const Home = () => {
    //TODO : faire csss
    const [isConnect, setIsConnected] = useState(false);
    return(
        <div className='view--home'>
            <div className="left-part">
                <div className="title-left-part">D’ont forgot about your animal !</div>
                <div className="subtitle-left-part">lorrem ipsumlorrem ipsumlorrem ipsumlorrem ipsum</div>
                {
                    isConnect === true &&
                    <Link to="/all-pets" style={{textDecoration:'none', color:'#fff'}}>
                        <div className="button-left-part">All Pets</div>
                    </Link>
                }
                {
                    isConnect === false &&
                    <Link to="/login" style={{textDecoration:'none', color:'#fff'}}>
                        <div className="button-left-part">Get Started</div>
                    </Link>
                }
            </div>
            <img src="/assets/images/image-home.png" alt="animal image" className="right-part"/>
        </div>
    )
}

export default Home;