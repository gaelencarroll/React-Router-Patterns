import React from 'react';
import {Link} from 'react-router-dom';
import './DogList.css'

function DogList({dogs}){
    return(
        <section className='dog-list-section'>
            <section className='title-section'>
                <h1 className='dog-title'>DOGS!! CLICK FOR MORE INFO</h1>
            </section>
            <section className='list-section'>
                {dogs.map(dog => (
                    <section key={dog.name}>
                        <img className='dog-image' src={dog.src}></img>
                        <h2>
                            <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
                        </h2>
                    </section>
                ))}
            </section>
        </section>
    )

}

export default DogList;