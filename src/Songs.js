import React from "react";
import { Button, Table } from "semantic-ui-react";

const Songs = ({ songs }) => (
  <Table color="green" inverted>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Song Title</Table.HeaderCell>
        <Table.HeaderCell>Artist</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        songs.map(song => (
          <Table.Row key = {song.id}>
            <Table.Cell>{song.name}</Table.Cell>
            <Table.Cell>{song.artist}</Table.Cell>
            <Table.Cell>
              <Button color = "red">
                Read
              </Button>
              <Button>
                Delete
              </Button>
            </Table.Cell>
          </Table.Row>
        ))
      }
    </Table.Body>
  </Table>
);

export default Songs;