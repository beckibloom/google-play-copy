import React from 'react';
import Game from './game/game.js';

class GooglePlayClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playstore:[],
      sort: '',
      genre: '',
      error: null
    }
  }

  setGenre(genre) {
    this.setState({
      genre
    });
  }

  setSort(sort) {
    this.setState({
      sort
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    //construct a URL with the query string
    const baseUrl = 'http://localhost:8000/apps';
    const params = [];
    if(this.state.sort) {
      params.push(`sort=${this.state.sort}`);
    }
    if(this.state.sort) {
      params.push(`genre=${this.state.genre}`);
    }
    const query = params.join('&');
    const url = `${baseUrl}?${query}`;

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          playstore: data,
          error: null //reset errors
        });
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, could not get games at this time.'
        });
      })

  }

  render() {
    const playstore = this.state.playstore.map((game, i) => {
      return <Game {...game} key={i} />
    })
    return (
      <main className="App">
        <h1>Games in the Google Play Store</h1>
        <div className="search">
          <form onSubmit={e => this.handleSubmit(e)}>

            <label htmlFor="sort">Sort: </label>
            <select id="sort" name="sort" onChange={e => this.setSort(e.target.value)}>
              <option value="">None</option>
              <option value="rating">Rating</option>
              <option value="app">App</option>
            </select>  

            <label htmlFor="genre">Genre: </label>
            <select id="sort" name="sort" onChange={e => this.setGenre(e.target.value)}>
              <option value="">None</option>
              <option value="Action">Action</option>
              <option value="Puzzle">Puzzle</option>
              <option value="Strategy">Strategy</option>
              <option value="Casual">Casual</option>
              <option value="Arcade">Arcade</option>
              <option value="Card">Card</option>
            </select>  

            <button type="submit">Show me the games!</button>  
          </form>

          <div className="App_error">
            { this.state.error }
          </div>

        </div>
        {playstore}
      </main>
    )
  }
}

export default GooglePlayClient;