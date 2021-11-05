// Import the everything
import React, { useState, useEffect } from 'react';
import axios from 'axios';


// Export component
export default function Details(props) {
    // Define some consts
    const { swId, close } = props;
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
        <div className='details-cont'>
            <h3>Physical Attributes</h3>
            {
                details &&
                <>
                    <div>
                        <p>Height: {details.height}</p>
                        <p>Mass: {details.mass}</p>
                    </div>
                    <div>
                        <p>Hair Color: {details.hair_color}</p>
                        <p>Skin Color: {details.skin_color}</p>
                        <p>Eye Color: {details.eye_color}</p>
                    </div>
                    <div>
                        <p>Gender: {details.gender}</p>
                        <p>Birth Year: {details.birth_year}</p>
                    </div>
                </>
            }
            <button onClick={close}>Close</button>
        </div>
    );
};