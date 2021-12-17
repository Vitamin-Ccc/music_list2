import { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import styled from 'styled-components';
import './App.css';
import { HeaderText } from './components/HeaderText';
import SongForm from './SongForm';
import Songs from './Songs';

class App extends Component {
  state = {
    songs: [
      { id: 1, name: "All I Want for Christmas Is You", artist: "Mariah Carey", image: "https://m.media-amazon.com/images/I/81U6o32LuUL._SL1500_.jpg" },
      { id: 2, name: "It's Beginning to Look a Lot Like Christmas", artist: "Michael Buble", image: "https://m.media-amazon.com/images/I/61M3mNpxJML._SX355_.jpg" },
      { id: 3, name: "Santa Tell Me", artist: "Ariana Grande", image: "https://m.media-amazon.com/images/I/61HbB2VISCL._SS500_.jpg" },
      { id: 4, name: "Jingle Bell Rock", artist: "Bobby Helms", image: "https://thinkcountrymusic.com/wp-content/uploads/2020/12/bobby-helms-jingle-bell-rock.jpg" },
    ],
  };

  addSong = (song) => {
    const newSongs = [song, ...this.state.songs]
    this.setState({
      songs: newSongs,
    });
  };

  deleteSong = (id) => {
    const filteredSongs = this.state.songs.filter((s) => s.id !== id);
    this.setState({
      songs: filteredSongs,
    });
  };


  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <HeaderText as="h1" color="red">Christmas Songs</HeaderText>
        <Divider />
        <SongForm addSong={this.addSong} />
        <Divider />
        <Songs songs={this.state.songs} deleteSong={this.deleteSong} />
      </Container>
    );
  };
};

export default App;
