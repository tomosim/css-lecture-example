import React from "react";
import ImageTile from "./ImageTile";
import * as api from "../api.js";
import loader from "../loader.svg";

class PhotoGrid extends React.Component {
  state = { photoURLs: [], isLoading: true, limit: 3 };

  componentDidMount() {
    this.getPhotoURLs().then(photoURLs => {
      this.setState({ photoURLs, isLoading: false });
    });
  }

  getPhotoURLs = () => {
    const URLPromises = [];
    for (let i = 0; i < this.state.limit; i++) {
      URLPromises.push(api.getRandomImage());
    }
    return Promise.all(URLPromises);
  };

  loadMore = () => {
    this.getPhotoURLs().then(urls => {
      this.setState(({ photoURLs }) => {
        return { photoURLs: [...photoURLs, ...urls] };
      });
    });
  };

  render() {
    return this.state.isLoading ? (
      <img src={loader} alt="loading..." />
    ) : (
      <>
        <div id="photo-grid">
          {this.state.photoURLs.map(URL => {
            return <ImageTile key={URL} url={URL} />;
          })}
        </div>
        <button
          onClick={() => {
            this.loadMore();
          }}
        >
          Load more
        </button>
      </>
    );
  }
}

export default PhotoGrid;
