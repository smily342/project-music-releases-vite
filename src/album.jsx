<<<<<<< HEAD
/* eslint-disable react/prop-types */
import ArtistName from "./ArtistName";
import "./index.css";
import dotsIcon from "./assets/icons/dots.svg";
import heartIcon from "./assets/icons/heart.svg";
import playIcon from "./assets/icons/play.svg";
=======

import React from "react";
import ArtistName from "./ArtistName";

>>>>>>> 9d4bff3 (added components and styling)

const Album = ({ album }) => {
    const { name, images, artists, external_urls } = album;

    const albumCover = images && images.length > 0 ? images[0].url : "";

    console.log(album);

    return (
        <div className="cover-container"> {/* Wrap everything in cover-container */}
            <img className="album-cover" src={albumCover} alt={`${name} cover`} />

            <div className="overlay"></div>
            <div className="icons">
                <img className="icon-small" src={heartIcon} alt="heart-icon" />
                {/* Wrap the play icon in an anchor tag to make it clickable */}
                {external_urls && external_urls.spotify && (
                    <a href={external_urls.spotify} target="_blank" rel="noopener noreferrer">
                        <img className="icon-big" src={playIcon} alt="play-icon" />
                    </a>
                )}
                <img className="icon-small" src={dotsIcon} alt="dots-icon" />
            </div>

            {/* Make the album title clickable, linking to Spotify */}
            <h2>
                {external_urls && external_urls.spotify && (
                    <>
                        {console.log("Album URL: ", album.external_urls.spotify)}
                        <a className="album-link" href={album.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                            {name}
                        </a>
                    </>
                )}
            </h2>

            {/* Render the artist names */}
            <h3> <ArtistName artists={artists} /></h3>

        </div>
    );
};

export default Album;



