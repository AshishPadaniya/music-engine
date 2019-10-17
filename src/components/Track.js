import React, { Component } from 'react';



class Tracks extends Component {

    state = { playing: false, audio: null, playingPreview: null }

    playAudio = previewUrl => () => {
        if (!previewUrl)
            return null;

        const audio = new Audio(previewUrl);



        if (!this.state.playing) {
            audio.play();
            this.setState({ playing: true, audio, playingPreview: previewUrl })

        } else {
            this.state.audio.pause();


            if (!(previewUrl === this.state.playingPreview)) {
                audio.play();
                this.setState({ audio, playingPreview: previewUrl })
            } else {
                this.state.audio.pause()
                this.setState({ playing: false })
            }

        }
    }

    trackIcon = track => {
        if (!track)
            return <span>N/A</span>;

        if (this.state.playing && this.state.playingPreview == track) 
            return <span>||</span>;

        return <span>&#9654;</span>
    }

    render() {
        const { tracks } = this.props;

        return (
            <div>
                {
                    tracks.map(track => {
                        const { id, name, album, preview_url } = track;

                        return (

                            <div className='track'
                                key={id} onClick={this.playAudio(preview_url)}>
                                <img className='track-image'
                                    src={album.images[0].url} alt='album-image'
                                />
                                <p className='track-text' >{name}</p>
                                <p className='track_icon'> {this.trackIcon(track.preview_url)} </p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Tracks;