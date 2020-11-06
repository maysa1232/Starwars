import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';

const People = ({ id }) => {
    const [responseData, setResponseData] = useState([]);
    const [homeWorldState, setHomeWorldState] = useState ({name: "Loading..."});


    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + id)
        .then(res => {setResponseData(res.data)})
        .catch(() => navigate("/error"));
    }, [id]);

    useEffect(() => {
        axios.get(responseData.homeWorld)
        .then(res => {
            setHomeWorldState(res.data);
        })
        .catch(console.log);
    }, [id, responseData]);

    const getHomeWorldId = () => {
        if(homeWorldState.url){
            const url = homeWorldState.url;
            let i = url.length - 2;
            let HwId = "";

            while(url[i] != "/"){
                HwId = url[i] + HwId;
                i--;
            }
            return HwId;
        }
    }

    return(
        <div className="container mt-2">
            <h1 className="display-4"> {responseData.name} </h1>
            <table>
                <tbody>
                    <tr>
                        <td className="font-weight-bold"> Height: </td>
                        <td>{responseData.height} cm </td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Weight:</td>
                        <td>{responseData.height} kg</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Hair Color:</td>
                        <td>{responseData.hair_color}</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Skin Color:</td>
                        <td>{responseData.skin_color}</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Eye Color:</td>
                        <td>{responseData.eye_color}</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Birth Year:</td>
                        <td>{responseData.birth_year}</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Homeworld:</td>
                        <td><Link to={"/planets/" + getHomeWorldId()} >{homeWorldState.name}</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default People;