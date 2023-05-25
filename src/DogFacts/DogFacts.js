import React from 'react';
import {Link, Navigate} from 'react-router-dom';
import './DogFacts.css'

function DogFacts({dog}){
    if (!dog) return <Navigate to="/dogs"/>
    return(
        <section className='dog-facts-section'>
            <img src={dog.src} className='dog-img'></img>
            <h1 className='dog-name'>Name: {dog.name}</h1>
            <h2 className='dog-age'>Age: {dog.age} years old</h2>
            <ul className='fact-list'>{dog.facts.map((fact,n) => (
                <li key={n} className='dog-fact'>{fact}</li>
            ))}</ul>
            <Link to='/dogs' className='go-back-link'>Go Back</Link>
        </section>
    )
}

export default DogFacts;