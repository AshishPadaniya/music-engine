import React from 'react';


const Artist = ({ artist }) => {

    if (!artist) return null;

    const { followers, genres, images, name } = artist;

    var totalFollowers = followers.total.toString();

    if (totalFollowers.length > 5) {

        totalFollowers = totalFollowers.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }

    return (
        <div>
            <h3>Artist Name: {name}</h3>
            <p>{totalFollowers} followers</p>
            <p> {genres.join(', ')} </p>
            {
                //check if images is undefined with && guard clause}
            }
            <img src={images[0] && images[0].url}
                alt='artist-profile-image'
                style={{
                    
                    height: 200,
                    width: 200,
                    borderRadius: 100,
                    objectFit: 'cover'
                }}
            />
        </div>
    )


}

export default Artist;