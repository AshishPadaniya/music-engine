import React, { Component } from 'react';
import Artist from './Artist';
import Tracks from './Track';
import Search from './Search';

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com";

class App extends Component {

   state = { artist: null, tracks: [] }

   componentDidMount(){
      this.searchArtist('pentatonix')
   }

   searchArtist = artistQuery => {
      console.log('aristQuery', artistQuery)
      
      if(!artistQuery.search("^\s*$")) return null;
    
      fetch(`${API_ADDRESS}/artist/${artistQuery}`)
         .then(response => response.json())
         .then(json => {
            if (json.artists.total > 0) {
               const artist = json.artists.items[0];

               // console.log('artist', artist);
               this.setState({ artist: artist })


               fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                  .then(response => response.json())
                  .then(json => {
                     this.setState({ tracks: json.tracks })
                     // console.log('tracks', this.state.tracks)
                  }).catch(error => alert('first'+error.message))

            }

         })
         .catch(error => alert('Second'+error.message))
   }




   render() {
      //console.log('state', this.state)
      return (
         <div>
            <h2> Search Artist </h2>
            <Search searchArtist={this.searchArtist}/>
            <Artist artist={this.state.artist} />
            <Tracks tracks={this.state.tracks} />
         </div>
      )
   }
}


export default App;