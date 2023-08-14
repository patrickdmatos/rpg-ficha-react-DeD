import { NavBar } from "../components/NavBar";


const DndRaces = [
    'Dragonborn',
    'Anão',
    'Elfo',
    'Gnomo',
    'Meio-Elfo',
    'Meio-Orc',
    'Pequenino',
    'Humano',
    'Tiefling',
    // Adicione mais raças conforme necessário
];

const DndClasses = [
    'Bárbaro',
    'Bardo',
    'Clérigo',
    'Druida',
    'Guerreiro',
    'Monge',
    'Paladino',
    'Patrulheiro',
    'Ladino',
    'Feiticeiro',
    'Bruxo',
    'Mago',
    // Adicione mais classes conforme necessário
];

const DndAlignments = [
    'Leal e Bom - LB',
    'Neutro e Bom - NB',
    'Caótico e Bom - CB',
    'Leal e Neutro - LN',
    'Neutro - N',
    'Caótico e Neutro - CN',
    'Leal e Mal - LM',
    'Neutro e Mal - NM',
    'Caótico e Mal - CM',
    // Adicione mais alinhamentos conforme necessário
];


export const CharacterSheet = () => {
    return (
        <div className="h-screen w-screen bg-slate-300 font-medievalsharp">
            <NavBar />
            <div className="flex w-[110.5rem] h-[56.4rem] rounded-lg mx-2 bg-slate-800">
                <div className="m-2">
                    <label className="block text-sm font-medium">Nome do personagem</label>
                    <input
                        type="text"
                        className="w-full py-2 px-3 bg-slate-600 dark:bg-slate-800 text-white rounded-lg"
                        placeholder="Insira o Nome do personagem"
                    />
                    <label className="block text-sm font-medium">Classe</label>
                    <select
                        className="w-full py-2 px-3 dark:bg-slate-800 bg-slate-600 text-white rounded-lg"
                        defaultValue="Select a class"
                    >
                        <option selected hidden>Selecione uma Classe</option>
                        {DndClasses.map((dndClass, index) => (
                            <option key={index} value={dndClass}>
                                {dndClass}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="m-2">
                    <label className="block text-sm font-medium">Raça</label>
                    <select
                        className="w-full py-2 px-3 dark:bg-slate-800 bg-slate-600 text-white rounded-lg"
                        defaultValue="Selecione uma Raça"
                    >
                        <option selected hidden>Selecione uma Raça</option>
                        {DndRaces.map((race, index) => (
                            <option key={index} value={race}>
                                {race}
                            </option>
                        ))}
                    </select>
                    <label className="block text-sm font-medium">Alinhamento</label>
                    <select
                        className="w-full py-2 px-3 dark:bg-slate-800 bg-slate-600 text-white rounded-lg"
                        defaultValue="Selecione um alinhamento"
                    >
                        <option selected hidden>Selecione um Alinhamento</option>
                        {DndAlignments.map((alignment, index) => (
                            <option key={index} value={alignment}>
                                {alignment}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}