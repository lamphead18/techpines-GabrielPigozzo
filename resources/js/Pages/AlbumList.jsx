import React from 'react';
import axios from 'axios';

const AlbumList = ({ albums, setSelectedAlbumId, refreshAlbums }) => {
    const handleDelete = (albumId) => {
        axios.delete(`/albums/${albumId}`)
            .then(response => {
                refreshAlbums();
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Álbuns</h2>
            <ul className="space-y-4">
                {albums?.map(album => (
                    <li 
                        key={album.id} 
                        className="bg-white p-4 rounded-lg shadow border border-gray-300 cursor-pointer"
                        onClick={() => setSelectedAlbumId(album.id)}
                    >
                        <span className="text-lg font-semibold text-gray-800">{album.name}</span>
                        <ul className="ml-4 mt-2 space-y-1">
                            {album.tracks?.map(track => (
                                <li key={track.id} className="text-gray-600">{track.name}</li>
                            ))}
                        </ul>
                        <button 
                            onClick={(e) => { 
                                e.stopPropagation(); 
                                handleDelete(album.id); 
                            }} 
                            className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded mt-2"
                        >
                            Excluir
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlbumList;
