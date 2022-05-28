import React, {useState} from 'react';
import CardPets from "../components/pages/CardPets";

const Pets = () => {
    const [dataPets, setDataPets] = useState({})
    return (
        <div className="view--pets">
            <div className="title-header">ALl Pets</div>
            <div className="container-pets">
                <CardPets data={dataPets} />
                <CardPets data={dataPets} />
                <CardPets data={dataPets} />
                <CardPets data={dataPets} />
                <CardPets data={dataPets} />
                <CardPets data={dataPets} />
                <CardPets data={dataPets} />
                <CardPets data={dataPets} />
            </div>
        </div>
    );
};

export default Pets;