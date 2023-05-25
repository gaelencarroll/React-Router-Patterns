import React from 'react';
import {useParams} from 'react-router-dom';
import DogFacts from '../DogFacts/DogFacts';

function FilterFacts({dogs}){
    const {name} = useParams()

    if(name) {
        const selectedDog = dogs.find(dog => dog.name.toLowerCase === name.toLowerCase())
        return(<DogFacts dog={selectedDog}></DogFacts>)
    }

    return null;
}

export default FilterFacts;