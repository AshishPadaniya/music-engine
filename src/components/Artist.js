import React from 'react';


const Artist = ({ artist }) => {

    if (!artist) return null;

    const { followers, genres, images, name } = artist;

    var totalFollowers = followers.total.toString();

    if (totalFollowers.length > 3) {

        totalFollowers = totalFollowers.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }

    return (
        <div>
            <h3>Artist Name: {name}</h3>
            <p>{totalFollowers} followers</p>
            <p> {genres.join(', ')} </p>
            {
                //check if images is undefined with && guard clause checks if images is array at zero is null}
            }
            <img className='artist-image' src={images[0] && images[0].url}
                alt='artist-profile-image'
            />
        </div>
    )


}

export default Artist;