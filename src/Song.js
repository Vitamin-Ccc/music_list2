import React from "react";
import { Button, Card, Image } from 'semantic-ui-react';

class Song extends React.Component {
  render = () => {
    const { name, artist, id, image } = this.props;
    // return songs.map((song) => {
      return (
        <Card>
          <Image src = {image} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>{artist}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Edit
              </Button>
              <Button basic color='red' onClick={() => deleteSong(id)}>
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      )
    // })
  }
}

export default Song;