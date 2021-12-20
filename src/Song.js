import React from "react";
import { Button, Card, Image, Icon } from 'semantic-ui-react';

class Song extends React.Component {
  render = () => {
    const { name, artist, id, image } = this.props;
    return (
      <Card>
        <Image src={image} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{artist}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green' icon>
              Edit &nbsp; 
              <Icon name ="edit"/>
            </Button>
            <Button basic color='red' onClick={() => this.props.deleteSong(id)} icon>
              Delete &nbsp; 
              <Icon name = "delete"/>
            </Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default Song;