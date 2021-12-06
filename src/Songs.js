import React from "react";
import { Button, Table } from "semantic-ui-react";
import { Popup, Card, Image, Rating } from 'semantic-ui-react';

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




// const Songs = ({ songs }) => (
//   <Table color="green" inverted>
//     <Table.Header>
//       <Table.Row>
//         <Table.HeaderCell>Song Title</Table.HeaderCell>
//         <Table.HeaderCell>Artist</Table.HeaderCell>
//         <Table.HeaderCell>Options</Table.HeaderCell>
//       </Table.Row>
//     </Table.Header>

//     <Table.Body>
//       {
//         songs.map(song => (
//           <Table.Row key = {song.id}>
//             <Table.Cell>{song.name}</Table.Cell>
//             <Table.Cell>{song.artist}</Table.Cell>
//             <Table.Cell>
//               <Button color = "red">
//                 Read
//               </Button>
//               <Button>
//                 Delete
//               </Button>
//             </Table.Cell>
//           </Table.Row>
//         ))
//       }
//     </Table.Body>
//   </Table>
// );

// export default Songs;


  // <Popup
  //   trigger={
  //     <Card>
  //       <Image src='https://m.media-amazon.com/images/I/81U6o32LuUL._SL1500_.jpg' />
  //       <Card.Content>
  //         <Card.Header>All I Want For Christmas Is You</Card.Header>
  //         <Card.Description>
  //           Mariah Carey
  //         </Card.Description>
  //       </Card.Content>
  //     </Card>
  //   }
  // >
  //   <Popup.Header>Rating</Popup.Header>
  //   <Popup.Content>
  //     <Rating icon='star' defaultRating={5} maxRating={5} />
  //   </Popup.Content>
  // </Popup>