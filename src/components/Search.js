import React, { Component } from 'react';


class Search extends Component {
    state = { artistQuery: '' }

    updateArtistQuery = event => {
        // console.log('event.target.value query', event.target.value)
        this.setState({ artistQuery: event.target.value })
    }

    enterPressed = event => {
        if (event.key === 'Enter') {
            this.searchArtist();
        }
    }

    searchArtist = () => {
        this.props.searchArtist(this.state.artistQuery)
    }


    render() {
        return (
            <div>
                <input className='input-box'
                    onChange={this.updateArtistQuery}
                    onKeyPress={this.enterPressed}
                    placeholder='Search for music artist' />
                <button type="button" className="btn btn-primary"
                    onClick={this.searchArtist}
                >Search</button>
            </div>
        )
    }
}

export default Search;