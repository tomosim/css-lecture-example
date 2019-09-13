import React from "react";

const ImageTile = ({ url }) => {
  return (
    <div>
      <img src={url} alt="random" />
    </div>
  );
};

export default ImageTile;
