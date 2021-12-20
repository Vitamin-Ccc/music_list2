import React from "react";
import { Card, Icon } from 'semantic-ui-react';
import { Star } from "./components/Animation";
import { ListHeader } from "./components/HeaderText";
import Song from "./Song";

class Songs extends React.Component {
  renderSongs = () => {
    return this.props.songs.map((s) => (
      <Song deleteSong={this.props.deleteSong} {...s} />
    ));
  };
  render() {
    return (
      <div>
        <ListHeader>
          List of Songs
        </ListHeader>
      <Card.Group itemsPerRow={3}>
        {this.renderSongs()}
      </Card.Group>
      <Star><Icon name = "star" /></Star>
      </div>
    )
  }
}

export default Songs;