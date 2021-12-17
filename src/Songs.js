import React from "react";
import { Card, Grid } from 'semantic-ui-react';
import Song from "./Song";

class Songs extends React.Component {
  renderSongs = () => {
    return this.props.songs.map((s) => (
      <Song deleteSong={this.props.deleteSong} {...s} />
    ));
  };
  render() {
    return (
      <Card.Group itemsPerRow={4}>
        {this.renderSongs()}
      </Card.Group>
    )
  }
}

export default Songs;