import React from "react";
import { useState, useEffect } from 'react';

function Search (props) {
     const [searchData, setsearchData] = useState({searchterm:""});

     const handleChange = (event)=> {
        setsearchData({...searchData, [event.target.value]: event.target.value});
     }


    return (
        <div>
            <h1>Search</h1>
        </div>
    )
}

export default Search 