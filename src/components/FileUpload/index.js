import React from "react";
import Dropzone from "react-dropzone";
import { Container, Dropbox, Preview } from "./styles";

export default class FileUpload extends React.Component {
  state = {
    files: []
  };

  onDrop = files => {
    this.setState({ files });
  };

  render() {
    const preview = this.state.files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    );

    const files = this.state.files.map(file => (
      <li
        style={{
          position: "relative",
          display: "inline-block"
        }}
        key={file.name}
      >
        <img
          style={{
            width: "100%",
            height: "auto",
            marginTop: "-15%"
          }}
          alt=""
          src={file.preview}
        />
      </li>
    ));

    return (
      <Container>
        <Dropzone
          accept={["image/jpeg", "image/gif", "image/bmp", "image/png"]}
          onDrop={this.onDrop}
          maxSize={4000000}
        >
          {({ getRootProps, getInputProps }) => (
            <section className="container">
              <div {...getRootProps({ className: "dropzone" })}>
                <Dropbox>
                  <input {...getInputProps()} />
                </Dropbox>
              </div>
            </section>
          )}
        </Dropzone>
        <Preview>{files}</Preview>
      </Container>
    );
  }
}
