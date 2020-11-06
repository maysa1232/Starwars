import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Spaceships = ({ id }) => {
    const [responseData, setResponseData] = useState([]);

    console.log(id);
    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/' + id)
            .then(res => { setResponseData(res.data)})
            .catch(() => navigate("/error"));
    }, [id]);

    return (
        <div className="container mt-2">
            <h1 className="display-4">{responseData.name}</h1>
            <table>
                <tbody>
                    <tr>
                        <td className="font-weight-bold">Model:</td>
                        <td>{responseData.model}</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Manufacturer:</td>
                        <td>{responseData.manufacturer}</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Starship Class:</td>
                        <td>{responseData.starship_class}</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Cost:</td>
                        <td>{responseData.cost_in_credits} credits</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Length:</td>
                        <td>{responseData.length} m</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Crew:</td>
                        <td>{responseData.crew}</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Hyperdrive Rating:</td>
                        <td>{responseData.hyperdrive_rating}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Spaceships;