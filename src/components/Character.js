// Write your Character component here
// Importing React
import React from 'react';

export default function Character(props) {
    // Declaring constant
    const charaInfo = props.info;

    // Return divs
    return (
        <div className='character'>
            <h2>{charaInfo.name}</h2>
            <button onClick={() => {props.openDetails(charaInfo.url)}}>
                View Details
            </button>
        </div>
    );
};