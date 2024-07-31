import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrackList = ({ setSelectedTrackId }) => {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        axios.get('/tracks')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setTracks(response.data);
                } else {
                    console.error('A resposta da API não é um array de álbuns:', response.data);
                }
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Faixas</h2>
            <ul className="space-y-4">
                {tracks?.map(track => (
                    <li 
                        key={track.id} 
                        className="bg-white p-4 rounded-lg shadow border border-gray-300 cursor-pointer"
                        onClick={() => setSelectedTrackId(track.id)}
                    >
                        <span className="text-lg font-semibold text-gray-800">{track.name}</span>
                        <ul className="ml-4 mt-2 space-y-1">
                            {track.tracks?.map(track => (
                                <li key={track.id} className="text-gray-600">{track.name}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrackList;
