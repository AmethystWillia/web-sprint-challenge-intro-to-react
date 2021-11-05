// Write your Character component here
// Importing React
import React, { useState, useEffect } from 'react';

export default function Character(props) {
    // Declaring constant
    const charaInfo = props.info;

    // Return divs
    return (
        <div className='character'>
            <h3>{charaInfo.name}</h3>
            <button onClick={() => {props.openDetails(charaInfo.name)}}>
                View Details
            </button>
        </div>
    );
};