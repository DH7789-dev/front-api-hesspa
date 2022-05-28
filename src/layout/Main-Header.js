import React, {useState} from 'react';


const MainHeader = () => {

    const [isConnect, setIsConnected] = useState(true);

    return (
        <>

            <div className="main-header">
                <img src="/assets/logo/logo.png" alt="logo" className="logo-header"/>
                <div className="link-container">
                    <div className="link">
                        <div className="title-link">Home</div>
                    </div>
                    <div className="link">
                        <div className="title-link">All Pets</div>
                    </div>
                    <div className="link">
                        <div className="title-link">Contact us</div>
                    </div>
                </div>
                <div className="auth-container">
                    {
                        isConnect === false &&
                        <div className="button-auth">Login</div>
                    }
                    {
                        isConnect === true &&
                        <img className="profile-img" src="/assets/logo/logo-profil.svg" alt=""/>
                    }
                </div>
            </div>
        </>
    );
};

export default MainHeader;