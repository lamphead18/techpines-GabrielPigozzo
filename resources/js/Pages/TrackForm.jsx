import React, { useState } from 'react';
import axios from 'axios';

const TrackForm = ({ albumId, refreshAlbums }) => {
    const [trackName, setTrackName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/albums/${albumId}/tracks`, { name: trackName, albumId })
            .then(response => {
                setTrackName('');
                refreshAlbums();
            })
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-gray-700">Nome da Faixa</label>
                <input 
                    type="text" 
                    value={trackName}
                    onChange={(e) => setTrackName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <button 
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300"
            >
                Adicionar Faixa
            </button>
        </form>
    );
};

export default TrackForm;
