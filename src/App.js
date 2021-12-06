import { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import './App.css';
import Songs from './Songs';

class App extends Component{
  state = {
    songs: [
      {id:1, name: "Run", artist: "BTS", },
      {id:2, name: "All I Want for Christmas Is You", artist: "Mariah Carey", image: "https://m.media-amazon.com/images/I/81U6o32LuUL._SL1500_.jpg"},
      {id:3, name: "It's Beginning to Look a Lot Like Christmas", artist: "Michael Buble",},
      {id:4, name: "Santa Tell Me", artist: "Ariana Grande",},
    ]
  }


  render(){
    return (
      <Container>
        <Header as = "h1">Music List</Header>
        <Songs songs = {this.state.songs}/>
      </Container>
    );
  }
  
}

export default App;
