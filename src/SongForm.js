import React from "react";
import { Button, Form } from "semantic-ui-react";
import { StyledButton } from "./components/Button";
import { FormHeader } from "./components/HeaderText";

class SongForm extends React.Component {
  state = { name: "", artist: "", image: "", show: false };
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
        <FormHeader>New Song Form</FormHeader>
        <StyledButton onClick = {this.toggleForm}>{this.state.show ? "Hide" : "Show"}</StyledButton>
        <br/>
        <br/>
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