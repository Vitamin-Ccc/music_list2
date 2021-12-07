// import React from "react";
// import { Button, Header, Form } from "semantic-ui-react";

// class SongForm extends React.Component {
//   state = {
//     name: this.props.name ? this.props.name : "",
//     artist: this.props.artist ? this.props.artist : "",
//     image: this.props.image ? this.props.image : "",
//     show: true,
//   };
//   handleChange = (e) => {
//     console.log("e.target.value:", e.target.value);
//     console.log("e.target.name:", e.target.name);
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   handleSubmit = () => {
//     if (!this.props.id) {
//       this.props.addSong({
//         id: id,
//         name: this.state.name,
//         artist: this.state.artist,
//         image: this.state.image,
//       });
//       this.setState({ name: "", artist: "", image: "" });
//     }
//     else {
//     }
//     toggleForm = () => {
//       this.setState({ show: !this.state.show });
//     };
//     render = () => {
//       return (
//         <div>
//           <Header>Song Form</Header>
//           <Button onClick={this.toggleForm}>{this.state.show ? "Hide" : "Show"}</Button>
//           {this.state.show && (
//             <Form onSubmit={this.handleSubmit}>
//               <Form.Field>
//                 <Form.Input
//                   name="name"
//                   label="Name"
//                   value={this.state.name}
//                   onChange={this.handleChange}
//                 />
//               </Form.Field>
//               <Form.Field>
//                 <Form.Input
//                   name="artist"
//                   label="Artist"
//                   value={this.state.artist}
//                   onChange={this.handleChange}
//                 />
//               </Form.Field>
//               <Form.Field>
//                 <Form.Input
//                   name="image"
//                   label="Image"
//                   value={this.state.image}
//                   onChange={this.handleChange}
//                 />
//               </Form.Field>

//               <Button type="submit">Submit</Button>
//             </Form>
//           )}
//         </div>
//       );
//     }
//   }
// }
// export default SongForm;


import React from "react";
import { Header, Form, Button } from "semantic-ui-react";

class SongForm extends React.Component {
  state = { name: "", artist: "", image: "", show: true };
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = () => {
    this.props.addSong({
      name: this.state.name,
      artist: this.state.artist,
      image: this.state.image
    });
    this.setState({name: "", artist: "", image: ""});
  };

  toggleForm = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    return (
      <div>
        <Header>Song Form</Header>
        <Button onClick = {this.toggleForm}>{this.state.show ? "Hide" : "Show"}</Button>
        {this.state.show && (
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Form.Input
              name="name"
              label="Song Name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              name="artist"
              label="Artist"
              placeholder="Artist"
              value={this.state.artist}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              name="image"
              label="Image URL"
              placeholder="URL"
              value={this.state.image}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
        )}
      </div>
    )
  }
}

export default SongForm;