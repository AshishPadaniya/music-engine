import React, {Component} from 'react';

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com"

class App extends Component{

   state = { artistQuery: '', artist: null}

   updateArtistQuery = event => {
      console.log('event.target.value query' , event.target.value)
      this.setState({ artistQuery: event.target.value})
   }

   searchArtist = () =>
   {
      fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
         .then(response => response.json())
         .then(json => { 
            if(json.artists.total > 0){
               const artist = json.artists.items[0];

               console.log('artist', artist);
               this.setState( { artist: artist })

               
               fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                  .then(response => response.json())
                  .then(json => console.log('artist json', json))
                  .catch(error => error.message)
            }
            
         })
         .catch(error => alert(error.message))
   }

   enterPressed = event => 
   {
      if(event.key === 'Enter'){
         this.searchArtist();
      }
   }
   

 render(){
    console.log('state', this.state)
     return(
        <div> 
           <h2> Music Engine </h2>
           <input 
               onChange={this.updateArtistQuery}  
               onKeyPress={this.enterPressed}
               placeholder='Search for music artist'>
                
            </input>
           <button 
               onClick={this.searchArtist}
           >Search</button>
        </div>
     )
   }
}


export default App;