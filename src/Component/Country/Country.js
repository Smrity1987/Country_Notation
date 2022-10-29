import React from 'react';

const Country = (props) => {
    const {name,flag,population,region}=props.country;
    const handleaddCountry=props.handleaddCountry;

    const flagStyle={
        height:'100px',
        width:'100px'
    }
    const countryStyle={
        border:'1px solid gray',
        padding:'5px',
        margin:'5px'
    }
    return (
        <div style={countryStyle}>
              <h4>Name : {name}</h4>
              <img style={flagStyle}src={flag} alt="" />
              <p>Population : {population}</p>
              <p>Region : {region}</p>
              <button onClick={()=>handleaddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;