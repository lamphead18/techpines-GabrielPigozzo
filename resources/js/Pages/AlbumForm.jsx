import React, { useState } from 'react';
import axios from 'axios';

const AlbumForm = ({ refreshAlbums }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/albums', { name })
            .then(response => {
                setName('');
                if (refreshAlbums) {
                    refreshAlbums();
                }
            })
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-800">Nome do Álbum:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 p-2 rounded w-full"
                />
            </div>
            <button 
                type="submit" 
                className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition-colors duration-300"
            >
                Adicionar Álbum
            </button>
        </form>
    );
};

export default AlbumForm;
