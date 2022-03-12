import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.name);
    const { name, flag, capital, population } = props.country;

    return (
        <div className='country'>
            <h2>This is :{name}</h2>
            <img src={flag} alt="" />
            <p> Capital is : {capital}</p>
            <p>Population : {population}</p>

        </div>
    );
};

export default Country;