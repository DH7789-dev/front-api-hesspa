import React, {useState} from 'react';
import CardPets from "../components/pages/CardPets";
import {useHistory} from "react-router-dom";

const Pets = () => {
    const [dataPets, setDataPets] = useState({})
    const history = useHistory();

    const onClickPageDescriptionPets = (id) => {
        history.push({
            pathname : `/pet/${id}`
        })
    }

    return (
        <div className="view--pets">
            <div className="title-header">ALL Pets</div>
            <div className="container-pets">
                <div className="pets-card" onClick={() => onClickPageDescriptionPets(1)}>
                    <CardPets data={dataPets} />
                </div>
                <div className="pets-card" onClick={() => onClickPageDescriptionPets(1)}>
                    <CardPets data={dataPets} />
                </div>
                <div className="pets-card" onClick={() => onClickPageDescriptionPets(1)}>
                    <CardPets data={dataPets} />
                </div>
                <div className="pets-card" onClick={() => onClickPageDescriptionPets(1)}>
                    <CardPets data={dataPets} />
                </div>
                <div className="pets-card" onClick={() => onClickPageDescriptionPets(1)}>
                    <CardPets data={dataPets} />
                </div>
                <div className="pets-card" onClick={() => onClickPageDescriptionPets(1)}>
                    <CardPets data={dataPets} />
                </div>
                <div className="pets-card" onClick={() => onClickPageDescriptionPets(1)}>
                    <CardPets data={dataPets} />
                </div>
                <div className="pets-card" onClick={() => onClickPageDescriptionPets(1)}>
                    <CardPets data={dataPets} />
                </div>
                <div className="pets-card" onClick={() => onClickPageDescriptionPets(1)}>
                    <CardPets data={dataPets} />
                </div>
            </div>
        </div>
    );
};

export default Pets;