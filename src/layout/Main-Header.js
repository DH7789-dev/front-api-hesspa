import React, {useState} from 'react';
import {Link} from "react-router-dom";


const MainHeader = () => {

    const [isConnect, setIsConnected] = useState(false);

    return (
        <>

            <div className="main-header">
                <img src="/assets/logo/logo.png" alt="logo" className="logo-header"/>
                <div className="link-container">
                    <Link to="/" style={{textDecoration:'none', color:'#1D266E'}}>
                        <div className="link">
                            <div className="title-link">Home</div>
                        </div>
                    </Link>
                    <Link to="/all-pets" style={{textDecoration:'none', color:'#1D266E'}}>
                        <div className="link">
                            <div className="title-link">All Pets</div>
                        </div>
                    </Link>
                    <Link to="/contact" style={{textDecoration:'none', color:'#1D266E'}}>
                        <div className="link">
                            <div className="title-link">Contact us</div>
                        </div>
                    </Link>
                </div>
                <div className="auth-container">
                    {
                        isConnect === false &&
                        <Link to="/login" style={{textDecoration:'none', color:'#FF7143'}}>
                            <div className="button-auth">Login</div>
                        </Link>
                    }
                    {
                        isConnect === true &&
                        <Link to="/login" style={{textDecoration:'none', color:'#fff'}}>
                            <img className="profile-img" src="/assets/logo/logo-profil.svg" alt=""/>
                        </Link>
                    }
                </div>
            </div>
        </>
    );
};

export default MainHeader;