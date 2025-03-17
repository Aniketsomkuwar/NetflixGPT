import React from 'react';

const MovieCard = ({ image, name }) => {
    const imageUrl = `https://image.tmdb.org/t/p/original${image}`; // Construct image URL

    return (
        <div className="w-70  rounded-md overflow-hidden shadow-md transition-transform transform hover:scale-105 cursor-pointer aspect-video">
            <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-80 transition-opacity flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg mb-2">{name}</h3>
            </div>
        </div>
    );
};

export default MovieCard;