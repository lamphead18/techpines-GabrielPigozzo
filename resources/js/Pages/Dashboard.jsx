import React from 'react';
import { Link } from '@inertiajs/react';

const Dashboard = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Discografia de Tião Carreiro e Pardinho 🤠</h1>
                <nav>
                    <ul className="space-y-4">
                        <li>
                            <Link 
                                href="/albums" 
                                className="block w-full text-center text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded transition-colors duration-300"
                            >
                                Ver Álbuns
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/search" 
                                className="block w-full text-center text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded transition-colors duration-300"
                            >
                                Pesquisar Álbuns e Faixas
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/add-album" 
                                className="block w-full text-center text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded transition-colors duration-300"
                            >
                                Adicionar Novo Álbum
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/add-track" 
                                className="block w-full text-center text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded transition-colors duration-300"
                            >
                                Adicionar Nova Faixa
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Dashboard;
