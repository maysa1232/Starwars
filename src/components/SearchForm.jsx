import React, { useState } from 'react';
import { navigate } from '@reach/router';

const SearchForm = () => {
    const [formState, setFormState] = useState ({
        category: "people",
        id:""
    });

    const onChange = e => {
        setFormState({...formState, [e.target.name]: e.target.value});
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(formState.category)
        navigate('/' + formState.category + '/' + formState.id);
    }

    return (
        <div className="container mt-2">
            <div className="jumbotron p-1">
                <h1 className="display-4">Star Wars API</h1>
            </div>
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-6">
                        <label>Search for:</label>
                        <select className="form-control" name="category" onChange={onChange}>
                            <option value="people">People</option>
                            <option value="planets">Planets</option>
                            <option value="starships">Spaceships</option>
                        </select>
                    </div>
                    <div className="col-3">
                        <label>ID:</label>
                        <input className="form-control" type="number" name="id" onChange={onChange} />
                    </div>
                    <div className="col-2">
                        <br />
                        <button className="form-control btn btn-primary mt-2" type="submit">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;