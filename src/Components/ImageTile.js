import React from "react";

const ImageTile = ({ url }) => {
  return (
    <div className="image-tile">
      <img id="photo" src={url} alt="random" />
    </div>
  );
};

export default ImageTile;
