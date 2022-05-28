import React from 'react';

const CardPets = ({link = "/assets/images/image-home.png", data = {}}) => {
    return (
        <div className="component--card-pets">
            <img src={link} alt="image pet" className="header-card"/>
            <div className="body-card">
                <div className="info-container">
                    <div className="title-info"> Nom: </div>
                    <div className="title-info"> Nom: </div>
                </div>
                <div className="info-container">
                    <div className="title-info"> Nom: </div>
                    <div className="title-info"> Nom: </div>
                </div>
                <div className="info-container">
                    <div className="title-info"> Nom: </div>
                    <div className="title-info"> Nom: </div>
                </div>
            </div>
        </div>
    );
};

export default CardPets;