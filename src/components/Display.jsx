import React from "react"

function Display ({artist}) {
    const loaded = () => {
       return (
        <div>
          <h2>{artist.title}</h2>
          <h2>{artist.data}</h2>
          <img src={artist.api_link} alt={artist.thumbnail} />

        </div>
       );
    };

    const loading = () => {
        return <h3>Loading</h3>
    }

    return artist ? loaded() : loading();

    return (
        <div>
            <h1>Display</h1>


        </div>
    )

}

export default Display