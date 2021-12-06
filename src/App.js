import { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import './App.css';
import Songs from './Songs';

class App extends Component{
  state = {
    songs: [
      {id:1, name: "All I Want for Christmas Is You", artist: "Mariah Carey", image: "https://m.media-amazon.com/images/I/81U6o32LuUL._SL1500_.jpg"},
      {id:2, name: "It's Beginning to Look a Lot Like Christmas", artist: "Michael Buble", image: "https://m.media-amazon.com/images/I/61M3mNpxJML._SX355_.jpg"},
      {id:3, name: "Santa Tell Me", artist: "Ariana Grande", image: "https://m.media-amazon.com/images/I/61HbB2VISCL._SS500_.jpg"},
      {id:4, name: "Jingle Bell Rock", artist: "Bobby Helms", image: "https://thinkcountrymusic.com/wp-content/uploads/2020/12/bobby-helms-jingle-bell-rock.jpg" },
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
