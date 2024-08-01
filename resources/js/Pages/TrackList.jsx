import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrackList = ({ albumId }) => {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        if (albumId) {
            axios.get(`/albums/${albumId}/tracks`)
                .then(response => {
                    if (Array.isArray(response.data)) {
                        setTracks(response.data);
                    } else {
                        console.error('A resposta da API não é um array de faixas:', response.data);
                    }
                })
                .catch(error => console.error(error));
        }
    }, [albumId]);

    const handleDelete = (trackId) => {
        axios.delete(`/albums/${albumId}/tracks`)
            .then(response => {
                setTracks(tracks.filter(track => track.id !== trackId));
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Faixas</h2>
            <ul className="space-y-4">
                {tracks?.map(track => (
                    <li 
                        key={track.id} 
                        className="bg-white p-4 rounded-lg shadow border border-gray-300 cursor-pointer"
                    >
                        <span className="text-lg font-semibold text-gray-800">{track.name}</span>
                        <button 
                            onClick={() => handleDelete(track.id)} 
                            className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded mt-2 ml-4"
                        >
                            Excluir
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrackList;
