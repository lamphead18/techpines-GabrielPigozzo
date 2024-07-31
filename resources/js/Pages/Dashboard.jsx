import React from 'react';
import { Link } from '@inertiajs/react';

const Dashboard = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Discografia de Tião Carreiro e Pardinho 🤠</h1>
            <nav>
                <ul className="space-y-2">
                    <li><Link href="/albums" className="text-blue-500 hover:underline">Ver Álbuns</Link></li>
                    <li><Link href="/search" className="text-blue-500 hover:underline">Pesquisar Álbuns e Faixas</Link></li>
                    <li><Link href="/add-album" className="text-blue-500 hover:underline">Adicionar Novo Álbum</Link></li>
                    <li><Link href="/add-track" className="text-blue-500 hover:underline">Adicionar Nova Faixa</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Dashboard;
