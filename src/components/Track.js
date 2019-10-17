import React, {Component} from 'react';



class Tracks extends Component{

    state = {  playing: false, audio: null , playingPreview: null }

    playAudio = previewUrl => () => 
    {
        if (!previewUrl)
            return alert('Sorry Preview not available for this track')

        const audio = new Audio(previewUrl);
        


        if(!this.state.playing){
             audio.play();
             this.setState({playing: true, audio, playingPreview: previewUrl})
             
        }else{
            this.state.audio.pause();
            
             
            if(!(previewUrl === this.state.playingPreview)){
                audio.play();
                this.setState({audio, playingPreview: previewUrl})
            }else{
                this.state.audio.pause()
                this.setState({playing: false})
            }
            
        }
    }

    render(){
        const {tracks } = this.props;
        
        return(
            <div>
            {
                tracks.map(track => {
                    const {id, name, album, preview_url } = track;
                    
                    return(
                       
                        <div key={id} onClick={this.playAudio(preview_url)}>
                            <img src={album.images[0].url} alt='album-image'
                             style={{ 
                                display: 'inline' ,
                                margin: 10,
                                marginBottom: 10,
                                 height: 200, width: 200, borderRadius: 100,
                                 objectFit: 'cover' 
                                }}
                            />
                            <p>{name}</p>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

export default Tracks;