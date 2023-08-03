import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";

const FichaCard = ({ name, race, className, alignment }) => {
    return (
        <div className={`dark:bg-slate-100 bg-slate-800 rounded-lg shadow-md p-4 ${className}`}>
            <h2 className="text-gray-100 dark:text-slate-700 text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-100 dark:text-slate-700">Raça: {race}</p>
            <p className="text-gray-100 dark:text-slate-700">alinhamento: {alignment}</p>
            {/* Adicione mais informações da ficha aqui */}
            <Link to={'/fichas'}>
                <button className="mt-4 bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-500">
                    Ver Detalhes
                </button>
            </Link>
        </div>
    );
};


const DnDFichas = [
    {
        id: 1,
        name: 'Carlos O brabo',
        race: `Humano - Paladino`,
        alinhamento: 'LB',
        // Adicione mais informações da ficha aqui
    },
    {
        id: 2,
        name: 'Ahley A budista',
        race: `Elfo - Barbaro`,
        alinhamento: 'LB',
        // Adicione mais informações da ficha aqui
    },
    {
        id: 3,
        name: 'Carlos O brabo II',
        race: `Humano - Guerreiro`,
        alinhamento: 'LB',
        // Adicione mais informações da ficha aqui
    },
    {
        id: 1,
        name: 'Carlos O brabo',
        race: `Humano - Paladino`,
        alinhamento: 'LB',
        // Adicione mais informações da ficha aqui
    },
    {
        id: 2,
        name: 'Ahley A budista',
        race: `Elfo - Barbaro`,
        alinhamento: 'LB',
        // Adicione mais informações da ficha aqui
    },
    {
        id: 3,
        name: 'Carlos O brabo II',
        race: `Humano - Guerreiro`,
        alinhamento: 'LB',
        // Adicione mais informações da ficha aqui
    },
];

const FichaMenu = () => {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Minhas Fichas</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {DnDFichas.map((ficha) => (
                    <FichaCard
                        key={ficha.id}
                        name={ficha.name}
                        race={ficha.race}
                        alignment={ficha.alinhamento}
                        className="border border-slate-300 dark:border-amber-600"
                    />
                ))}
            </div>
        </div>
    );
};

export const Mesas = () => {
    return (
        <div className="flex h-screen bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100">
            <SideBar />
            <FichaMenu />
        </div>
    )
}
