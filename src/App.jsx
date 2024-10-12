/* eslint-disable no-unused-vars */
import React from "react";
import data from "./data.json";
import "./index.css";
import Album from "./album";



export const App = () => {

  const albums = data.albums.items;

  return (
    <div className="background"> {/* Apply background class to div */}
      <h1>Recent Spotify Releases</h1>

      <div className="album-list">
        {/* Use .map() to render an Album component for each album */}
        {albums.map((album) => (
          <Album key={album.id} album={album} />
        ))}

      </div>
    </div>
  );
};

<<<<<<< HEAD
=======
// Album component to display album details
const Album = ({ album }) => {
  return (
    <div className="album-item">
      <h2>{album.name}</h2>  {/* Display the album name */}
      <img src={album.images[0].url} alt={album.name} width="200px" />  {/* Album cover */}

      <p>Artists: {album.artists.map(artist => artist.name).join(", ")}</p>  {/* Artists */}
      <a href={album.external_urls.spotify} target="_blank" rel="noopener noreferrer">
        Listen on Spotify
      </a>  {/* Spotify link */}
    </div>
  );
};

>>>>>>> 9d4bff3 (added components and styling)
export default App;

