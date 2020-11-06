import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Planets = ({ id }) => {
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/" + id)
        .then(res => {setResponseData(res.data)})
        .catch(() => navigate("/error"));
    }, [id]);

    return (
        <div className="container mt-2">
            <h1 className="display-4">{responseData.name}</h1>
            <table>
                <tbody>
                    <tr>
                        <td className="font-weight-bold">Terrain:</td>
                        <td>{responseData.terrain}</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Climate:</td>
                        <td>{responseData.climate}</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Population:</td>
                        <td>{responseData.population}</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Gravity:</td>
                        <td>{responseData.gravity}</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Diameter:</td>
                        <td>{responseData.diameter} km</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Rotation Period:</td>
                        <td>{responseData.rotation_period} days</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Orbital Period:</td>
                        <td>{responseData.orbital_period} days</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Planets;