import React from "react";
import { Button, Card, Image } from 'semantic-ui-react';

const Songs = ({ songs }) => {
  const renderSongs = () => {
    return songs.map((song) => {
      return (
        <Card>
          <Image src = {song.image} />
          <Card.Content>
            <Card.Header>{song.name}</Card.Header>
            <Card.Meta>{song.artist}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Read
              </Button>
              <Button basic color='red'>
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      )
    })
  }
  return (
    <Card.Group>
      {renderSongs()}
    </Card.Group>
  )
}
export default Songs;