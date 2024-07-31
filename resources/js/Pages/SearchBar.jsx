import React, { useState } from 'react';
import axios from 'axios';
import { usePage } from '@inertiajs/react';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const { props } = usePage();

    const handleSearch = () => {
        axios.get(`/search?query=${query}`)
            .then(response => setResults(response.data))
            .catch(error => console.error(error));
    };

    return (
        <div className="container mx-auto p-4">
            <div className="mb-4">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Pesquisar álbuns e faixas"
                    className="border border-gray-300 p-2 rounded w-full"
                />
                <button 
                    onClick={handleSearch} 
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full hover:bg-blue-600 transition-colors duration-300"
                >
                    Pesquisar
                </button>
            </div>
            <ul className="space-y-2">
                {results.map(result => (
                    <li key={result.id} className="bg-white p-2 rounded-lg shadow border border-gray-300 text-gray-800">
                        {result.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;
