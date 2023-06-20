import React from 'react';
import { useParams } from 'react-router-dom';

const DogDetails = ({ dogs }) => {
    const { name } = useParams();

    const dog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());

    if (!dog) {
        return <h2>Sorry, the dog was not found.</h2>
    }

    return (
        <div>
            <h2>{dog.name}</h2>
            <img src={dog.src} alt={dog.name} />
            <p>Age: {dog.age}</p>
            <h3>Facts:</h3>
            <ul>
                {dog.facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
        </div>
    );
};

export default DogDetails;
