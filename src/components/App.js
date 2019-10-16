import React, {Component} from 'react';

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com"

class App extends Component{

   state = { artistQuery: '', artis}

   updateArtistQuery = event => {
      console.log('event.target.value query' , event.target.value)
      this.setState({ artistQuery: event.target.value})
   }

   searchArtist = () =>
   {
      console.log('this.state', this.state)

      fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
         .then(response => response.json())
         .then(json => {
            console.log('json', json)
            
            
         })
         .catch(error => alert(error.message))
   }

   enterPressed = event => 
   {
      console.log('enterpressed event', event)
      if(event.key === 'Enter'){
         this.searchArtist();
      }
   }
   

 render(){
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