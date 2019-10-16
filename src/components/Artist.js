import React from 'react';


const Artist = ({ artist }) => {
    
    if(!artist) return null;

    const {followers, genres, images, name} = artist;

    return(
        <div>
            <h3>Artist Name: {name}</h3>
            <p>{followers.total} followers</p>
            <p> {genres.join(', ')} </p>
            {
                //check if images is undefined with && guard clause}
            }
            <img src={images[0] && images[0].url} 
                 alt='artist-profile-image'
                 style={ {
                     height: 200,
                     width: 200,
                    borderRadius: 100
                 } }
            />
        </div>
    )


}

export default Artist;