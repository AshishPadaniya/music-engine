import React from 'react';


const Artist = ({ artist }) => {

    const {followers, genres, images, name} = artist;

    return(
        <div>
            <h3>{name}</h3>
            <p>{followers}</p>
            <p> {genres.join(",")} </p>
            <img src={images[0].url} alt="artist-profile-image" />
        </div>
    );


}

export default Artist;