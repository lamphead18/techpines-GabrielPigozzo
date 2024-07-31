import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlbumList from './AlbumList';
import AlbumForm from './AlbumForm';
import TrackForm from './TrackForm';

const Dashboard = () => {
    const [albums, setAlbums] = useState([]);
    const [selectedAlbumId, setSelectedAlbumId] = useState(null);

    const refreshAlbums = () => {
        axios.get('/albums')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setAlbums(response.data);
                } else {
                    console.error('A resposta da API não é um array de álbuns:', response.data);
                }
            })
            .catch(error => console.error(error));
    };

    useEffect(() => {
        refreshAlbums();
    }, []);

    return (
        <div className="flex items-start justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 w-1/2">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Discografia de Tião Carreiro e Pardinho 🤠</h1>
                <AlbumList 
                    albums={albums} 
                    setSelectedAlbumId={setSelectedAlbumId} 
                    refreshAlbums={refreshAlbums} 
                />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 w-1/2 ml-4">
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Adicionar Novo Álbum</h2>
                <AlbumForm refreshAlbums={refreshAlbums} />
                {selectedAlbumId && (
                    <>
                        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 mt-8">Adicionar Nova Faixa</h2>
                        <TrackForm albumId={selectedAlbumId} refreshAlbums={refreshAlbums} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
