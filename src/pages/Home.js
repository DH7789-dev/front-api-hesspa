
import React, {useEffect, useState} from "react"


const Home = () => {
    //TODO : faire csss
    return(
        <div className='view--home'>
            <div className="left-part">
                <div className="title-left-part">D’ont forgot about your animal !</div>
                <div className="subtitle-left-part">lorrem ipsumlorrem ipsumlorrem ipsumlorrem ipsum</div>
                <div className="button-left-part">Get Started</div>
            </div>
            <img src="/assets/images/image-home.png" alt="animal image" className="right-part"/>
        </div>
    )
}

export default Home;