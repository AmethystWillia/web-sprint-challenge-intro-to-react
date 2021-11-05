// Write your Character component here
// Importing React
import React from 'react';
import styled from 'styled-components';

// Styling component
const StyledCharacter = styled.div`
    margin: 1%;
    padding: 1.2%;
    border: 2px solid gold;
    border-radius: 100px;
    width: 50%;
    background: rgb(255, 255, 255, 0.1);

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    h2 {
        padding: 0 2%;
    }
    h2:hover {
        text-shadow: 2px 2px 3px darkgrey;
    }
`;

export default function Character(props) {
    // Declaring constant
    const charaInfo = props.info;

    // Return divs
    return (
        <StyledCharacter className='character'>
            <h2>{charaInfo.name}</h2>
            <button onClick={() => {props.openDetails(charaInfo.url)}}>
                View Details
            </button>
        </StyledCharacter>
    );
};