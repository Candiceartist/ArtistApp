import React from "react";
import { useState, useEffect } from 'react';

function Search (props) {
    const [searchData, setsearchData] = useState({searchterm:""});

    const handleChange = (event)=> {
        setsearchData({...searchData, [event.target.value]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.artsearch(searchData.searchterm);
    }


    return (
        <div>
            <h1>Search</h1>
            <form>
                <input 
                type="text"
                name="searchterm"
                value={searchData.searchterm}
                placeholder="Search Artwork or Artist"  />
                
            </form>
        </div>
    )
}

export default Search 