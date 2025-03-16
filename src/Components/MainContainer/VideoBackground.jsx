import React from "react";

import useFetchTrailer from "../../hooks/useFetchTrailer";
const VideoBackground = ({ movieId }) => {

    const trailer = useFetchTrailer(movieId);

    const youtubeEmbedUrl = `https://www.youtube.com/embed/${trailer}?playlist=${trailer}&loop=1&autoplay=1&mute=1`;

    return (
        <div className="w-screen">
            <iframe
                className="w-screen aspect-video"
                id="ytplayer"
                type="text/html"
                src={youtubeEmbedUrl}



            ></iframe>
        </div>
    );
};

export default VideoBackground;
