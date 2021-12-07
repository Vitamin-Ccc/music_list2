import React from "react";
import { Button, Card, Image } from 'semantic-ui-react';
import Song from "./Song";

class Songs extends React.Component {
  renderSongs = () => {
    return this.props.songs.map((song) => (
      <Song deleteSong={this.props.deleteSong} {...song} />
    ));
  };
  render() {
    return (
      <Card.Group>
        {this.renderSongs()}
      </Card.Group>
    )
  }



}

export default Songs;