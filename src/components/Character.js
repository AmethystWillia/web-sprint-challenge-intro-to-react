// Write your Character component here
// Importing React
import React, { useState } from 'react';
import styled from 'styled-components';

// Import component
import Details from './Details';

// Styling component
const StyledCharacter = styled.div`
    margin: 1%;
    padding: 1.2%;
    border: 2px solid gold;
    border-radius: 100px;
    width: 90%;
    background: rgb(255, 255, 255, 0.1);

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    h2 {
        padding: 0 1%;
    }
    h2:hover {
        text-shadow: 2px 2px 3px darkgrey;
    }

    button {
        width: 150px;
    }

    .details {
        width: 70%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-content: center;
        align-items: center;
    }
`;

export default function Character(props) {
    // Declaring constant
    const charaInfo = props.info;
    const { swId, close } = props;
    const [details, setDetails] = useState(false);

    const toggleDetails = () => {
        setDetails(!details);
        props.openDetails(charaInfo.url);
    }

    // Return divs
    return (
        <StyledCharacter className='character'>
            <h2>{charaInfo.name}</h2>
            <div className='details'>
                <button onClick={toggleDetails}>
                    {details === false ? 'View Details' : 'Close'}
                </button>
                {details === true ? swId && <Details swId={swId} close={close} /> : ''}
            </div>
        </StyledCharacter>
    );
};