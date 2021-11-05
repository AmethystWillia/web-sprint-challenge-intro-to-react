// Import the everything
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styling component
const StyledDetails = styled.div`
    margin: 1%;
    padding: 1%;
    border: 2px solid gold;
    border-radius: 10px;
    width: 60%;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    .bold {
        font-weight: bold;
        font-size: 2rem;
    }

    .inner-div {
        padding: 2%;
        marging: 2%;
    }

    .container {
    margin: 0 3px;
    border: 2px solid gold;
    border-radius: 10px;
    width: 80%;
    background: rgb(255, 255, 255, 0.08);

    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    }
`;


// Export component
export default function Details(props) {
    // Define some consts
    const { swId } = props;
    const [details, setDetails] = useState(null);

    // Side effect that runs when swId is changed
    useEffect(() => {
        axios.get(`${swId}`)
            .then(res => {
                setDetails(res.data);
            })
            .catch(err => {
                console.error(`You fucked up! ${err}`);
            })
    }, [swId]);

    // Return DOM
    return (
        <StyledDetails>
            <div className='container'>
            <h3>Physical Attributes</h3>
            {
                details === null ? <p>Loading...</p> :
                <>
                    <div className='inner-div'>
                        <p><span className='bold'>Height:</span> {details.height}</p>
                        <p><span className='bold'>Mass:</span> {details.mass}</p>
                    </div>
                    <div className='inner-div'>
                        <p><span className='bold'>Hair Color:</span> {details.hair_color}</p>
                        <p><span className='bold'>Skin Color:</span> {details.skin_color}</p>
                        <p><span className='bold'>Eye Color:</span> {details.eye_color}</p>
                    </div>
                    <div className='inner-div'>
                        <p><span className='bold'>Gender:</span> {details.gender}</p>
                        <p><span className='bold'>Birth Year:</span> {details.birth_year}</p>
                    </div>
                </>
            }
            </div>
            {/* I tried and failed but it was cool */}
            {/* <div className='container'>
                <h3>Homeworld</h3>
                {
                details === null ? <p>Loading...</p> :
                <>
                    <div className='inner-div'>
                        <p><span className='bold'>Name:</span> {home.name}</p>
                        <p><span className='bold'>Diameter:</span> {home.diameter}</p>
                        <p><span className='bold'>Population:</span> {home.population}</p>
                        <p><span className='bold'>Gravity:</span> {home.gravity}</p>
                    </div>
                    <div className='inner-div'>
                        <p><span className='bold'>Terrain:</span> {home.terrain}</p>
                        <p><span className='bold'>Climate:</span> {home.climate}</p>
                        <p><span className='bold'>Surface Water:</span> {home.surface_water}</p>
                    </div>
                    <div className='inner-div'>
                        <p><span className='bold'>Rotation Period:</span> {home.rotation_period}</p>
                        <p><span className='bold'>Obital Period:</span> {home.orbital_period}</p>
                    </div>
                </>
            }
            </div> */}
        </StyledDetails>
    );
};