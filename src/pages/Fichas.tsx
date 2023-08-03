import SideBar from "../components/SideBar";

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

const DnDProeficients = {
    forca: ['Atletismo'],
    destreza: ['Acrobacia', 'Furtividade', 'Prestidigitação'],
    constituicao: [],
    inteligencia: ['Arcanismo', 'História', 'Investigação', 'Natureza', 'Religião'],
    sabedoria: ['Percepção', 'Sobrevivência'],
    carisma: ['Atuação', 'Enganação', 'Intimidação', 'Persuasão'],
}

function ProeficienciesList({ proeficiencies }) {
    return (
        <ul className="border-b text-slate-100 justify-between">
            {proeficiencies.map((proef) => (
                <li key={proef} className="flex items-center justify-between py-2">
                    <span>{proef}</span>
                    <input
                        type="checkbox"
                        name={proef}
                        id={proef}
                        className="form-checkbox h-5 w-5 bg-amber-500 transition duration-150 ease-in-out"
                    />
                </li>
            ))}
        </ul>
    );
}

const Attribute = ({ name, value }) => {
    return (
        <div className="flex justify-between items-center py-2 px-4 border-b border-slate-600">
            <span className="text-amber-400 font-semibold">{name}</span>
            <span className="text-white font-bold">{value}</span>
        </div>
    );
};


export const Ficha = () => {
    return (
        <div className="flex h-screen bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100">
            <SideBar />
            <div className="w-full h-screen flex px-4 py-4 bg-slate-100 dark:bg-slate-800 rounded-lg justify-center items-center">
                <div className="w-full h-full bg-slate-400 dark:bg-slate-900 p-4 rounded-lg">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
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
                            <div>
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
                            <div className="dark:bg-slate-800 bg-slate-600 flex w-[20rem] p-4 rounded-lg h-[29rem]">

                            </div>
                        </div>
                        <div>
                            <div className="dark:bg-slate-800 bg-slate-600 w-80 p-4 rounded-lg">
                                <h2 className="text-2xl text-white font-semibold mb-4">Atributos</h2>
                                <Attribute name="Força" value="16" />
                                <Attribute name="Destreza" value="14" />
                                <Attribute name="Constituição" value="18" />
                                <Attribute name="Inteligência" value="10" />
                                <Attribute name="Sabedoria" value="12" />
                                <Attribute name="Carisma" value="14" />
                            </div>
                            <div className="mt-2 flex items-center gap-4">
                                <div className="dark:bg-slate-800 bg-slate-600 p-2 flex justify-between w-24 rounded-lg">
                                    <span className="text-amber-400 font-semibold">CA</span>
                                    <span className="text-white font-bold">10</span>
                                </div>
                                <div className="dark:bg-slate-800 bg-slate-600 p-2 flex justify-between w-24 rounded-lg">
                                    <span className="text-amber-400 font-semibold">INIT</span>
                                    <span className="text-white font-bold">10</span>
                                </div>
                                <div className="dark:bg-slate-800 bg-slate-600 p-2 flex justify-between w-24 rounded-lg">
                                    <span className="text-amber-400 font-semibold">DESC</span>
                                    <span className="text-white font-bold">10</span>
                                </div>
                            </div>
                            <div className="mt-2 w-80 h-8 flex items-center">
                                <div className="w-full h-full p-1 dark:bg-slate-800 bg-slate-600 rounded-3xl">
                                    <div className="w-full h-full bg-green-500 rounded-3xl text-center font-semibold text-slate-700">20/20</div>
                                </div>
                            </div>
                            <div className="mt-2 w-80 h-44 flex items-center">
                                <div className="w-full h-full p-1 dark:bg-slate-800 bg-slate-600 rounded-lg">
                                    <div className="dark:bg-slate-800 bg-slate-600 p-2 flex justify-between w-20 border-b border-slate-500">
                                        <span className="text-amber-400 font-semibold">CA</span>
                                        <span className="text-white font-bold">10</span>
                                    </div>
                                    <div className="dark:bg-slate-800 bg-slate-600 p-2 flex justify-between w-20 border-b border-slate-500">
                                        <span className="text-amber-400 font-semibold">INIT</span>
                                        <span className="text-white font-bold">10</span>
                                    </div>
                                    <div className="dark:bg-slate-800 bg-slate-600 p-2 flex justify-between w-24 border-b border-slate-500">
                                        <span className="text-amber-400 font-semibold">DESC</span>
                                        <span className="text-white font-bold">10</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="dark:bg-slate-800 bg-slate-600 w-72 p-4 rounded-lg max-h-[34rem] fixed">
                                <div className="overflow-y-scroll max-h-[30rem]">
                                    <span className="text-amber-400 font-semibold custom-scroll">Força</span>
                                    <ProeficienciesList proeficiencies={DnDProeficients.forca} />
                                    <span className="text-amber-400 font-semibold">Destreza</span>
                                    <ProeficienciesList proeficiencies={DnDProeficients.destreza} />
                                    <span className="text-amber-400 font-semibold">Constituição</span>
                                    <ProeficienciesList proeficiencies={DnDProeficients.constituicao} />
                                    <span className="text-amber-400 font-semibold">Inteligência</span>
                                    <ProeficienciesList proeficiencies={DnDProeficients.inteligencia} />
                                    <span className="text-amber-400 font-semibold">Sabedoria</span>
                                    <ProeficienciesList proeficiencies={DnDProeficients.sabedoria} />
                                    <span className="text-amber-400 font-semibold">Carisma</span>
                                    <ProeficienciesList proeficiencies={DnDProeficients.carisma} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Add more sections for character attributes, skills, inventory, etc. */}
            </div>
        </div>
    )
}
