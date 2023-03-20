import React from "react";
import { useState, useEffect } from 'react';

function Search (props) {
    const [searchData, setsearchData] = useState({searchterm:""});

    const handleChange = (event)=> {
        setsearchData({...searchData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.artsearch(searchData.searchterm);
    }


    return (
        <div>
            <h1>Search</h1>
            <form onSubmit={handleChange} >
                <input 
                type="text"
                name="searchterm"
                onChange={handleChange}
                value={searchData.searchterm}
                placeholder="Search Artwork or Artist"  />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Search 