import { useEffect, useState } from "react";
import { loadCharacterData, saveCharacterData, CharacterData } from "@/localStorageService";

const initialCharacterData: CharacterData = {
  name: "Petruquio",
  player: "Claudinho",
  class: "Barbaro",
  level: 1,
  race: "humano",
  background: "",
  alignment: "",
  experience: 0,
  attributes: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10
  },
  hitPoints: {
    current: 10,
    max: 10
  },
  armorClass: 10,
  initiative: 0,
  speed: 30,
  weapons: [],
  skills: [],
  spells: [],
  equipment: [],
  backgroundDetails: ""
};

export default function Home() {
  const [characterData, setCharacterData] = useState<CharacterData>(initialCharacterData);
  const [newItemName, setNewItemName] = useState<string>("");
  const [newItemDescription, setNewItemDescription] = useState<string>("");
  const [newSkillName, setNewSkillName] = useState<string>("");
  const [newSkillDescription, setNewSkillDescription] = useState<string>("");

  useEffect(() => {
    const data = loadCharacterData();
    if (data) {
      setCharacterData(data);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCharacterData({
      ...characterData,
      [name]: value
    });
  };

  const handleSave = () => {
    saveCharacterData(characterData);
  };

  const handleAddItem = () => {
    if (newItemName.trim() === "" || newItemDescription.trim() === "") {
      return; // Evita adicionar itens vazios
    }

    const newItem = {
      name: newItemName,
      description: newItemDescription
    };

    setCharacterData({
      ...characterData,
      // weapons: [...characterData.weapons, newItem]
    });

    // Limpa os campos de input após adicionar o item
    setNewItemName("");
    setNewItemDescription("");
  };

  // Função para adicionar uma nova habilidade ou feitiço
  const handleAddSkill = () => {
    if (newSkillName.trim() === "" || newSkillDescription.trim() === "") {
      return; // Evita adicionar habilidades vazias
    }

    const newSkill = {
      name: newSkillName,
      description: newSkillDescription
    };

    setCharacterData({
      ...characterData,
      // skills: [...skills, newSkill]
    });

    // Limpa os campos de input após adicionar a habilidade
    setNewSkillName("");
    setNewSkillDescription("");
  };

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-8`}>
      <header className="w-full max-w-4xl p-8 bg-gray-600 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-300">Ficha de Personagem</h1>
        <div className="flex items-center mt-4 gap-6">
          <div>
            <p className="mt-2 text-blue-100">Nome do Personagem:</p>
            <input
              onChange={handleInputChange}
              className="mt-2 text-gray-900 font-semibold"
              type="text"
              name="name"
              value={characterData.name}
            />
          </div>
          <div>
            <p className="mt-2 text-blue-100">Classe:</p>
            <input
              onChange={handleInputChange}
              className="mt-1 text-gray-900 font-semibold"
              type="text"
              name="class"
              value={characterData.class}
            />
          </div>
          <div>
            <p className="mt-2 text-blue-100">Raça:</p>
            <input
              onChange={handleInputChange}
              className="mt-1 text-gray-900 font-semibold"
              type="text"
              name="race"
              value={characterData.race}
            />
          </div>
        </div>
        <div className="flex items-center mt-2 gap-6">
          <div>
            <p className="mt-2 text-blue-100">Altura:</p>
            <input
              onChange={handleInputChange}
              className="mt-2 text-gray-900 font-semibold"
              type="text"
              name="height" // Substitua com o nome apropriado
              value={''} // Substitua com o valor apropriado
            />
          </div>
          <div>
            <p className="mt-2 text-blue-100">Idade:</p>
            <input
              onChange={handleInputChange}
              className="mt-1 text-gray-900 font-semibold"
              type="text"
              name="age" // Substitua com o nome apropriado
              value={''} // Substitua com o valor apropriado
            />
          </div>
          <div>
            <p className="mt-2 text-blue-100">Antecedente:</p>
            <input
              onChange={handleInputChange}
              className="mt-1 text-gray-900 font-semibold"
              type="text"
              name="background" // Substitua com o nome apropriado
              value={characterData.background} // Substitua com o valor apropriado
            />
          </div>
        </div>
      </header>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <section className="md:col-span-1 p-4 bg-gray-600 shadow-lg rounded-lg justify-center">
          <h2 className="text-2xl font-bold text-gray-100 text-center">Atributos</h2>
          <div className="grid grid-cols-1 gap-8 mt-6 px-8 justify-center">
            <div className="flex flex-col items-center text-center">
              <label className="text-gray-200 mb-2 font-semibold">Força</label>
              <input
                onChange={handleInputChange}
                className="text-gray-900 w-20 p-2 border border-gray-300 rounded"
                type="number"
                name="attributes.strength"
                value={characterData.attributes.strength}
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <label className="text-gray-200 mb-2 font-semibold">Destreza</label>
              <input
                onChange={handleInputChange}
                className="text-gray-900 w-20 p-2 border border-gray-300 rounded"
                type="number"
                name="attributes.dexterity"
                value={characterData.attributes.dexterity}
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <label className="text-gray-200 mb-2 font-semibold">Constituição</label>
              <input
                onChange={handleInputChange}
                className="text-gray-900 w-20 p-2 border border-gray-300 rounded"
                type="number"
                name="attributes.constitution"
                value={characterData.attributes.constitution}
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <label className="text-gray-200 mb-2 font-semibold">Inteligência</label>
              <input
                onChange={handleInputChange}
                className="text-gray-900 w-20 p-2 border border-gray-300 rounded"
                type="number"
                name="attributes.intelligence"
                value={characterData.attributes.intelligence}
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <label className="text-gray-200 mb-2 font-semibold">Sabedoria</label>
              <input
                onChange={handleInputChange}
                className="text-gray-900 w-20 p-2 border border-gray-300 rounded"
                type="number"
                name="attributes.wisdom"
                value={characterData.attributes.wisdom}
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <label className="text-gray-200 mb-2 font-semibold">Carisma</label>
              <input
                onChange={handleInputChange}
                className="text-gray-900 w-20 p-2 border border-gray-300 rounded"
                type="number"
                name="attributes.charisma"
                value={characterData.attributes.charisma}
              />
            </div>
          </div>
        </section>

        <div className="md:col-span-2 space-y-8">
          <section className="p-8 bg-gray-600 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-100">Inventário</h2>
            <div className="flex flex-col mt-4">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800 text-gray-200">
                    <th className="p-2">Item</th>
                    <th className="p-2">Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  {characterData.weapons.map((item, index) => (
                    <tr key={index} className="bg-gray-700 text-gray-100">
                      <td className="p-2">{item.name}</td>
                      <td className="p-2">{''}</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-700 text-gray-100">
                    <td className="p-2">
                      <input
                        onChange={(e) => setNewItemName(e.target.value)}
                        value={newItemName}
                        className="text-gray-900 p-2 border border-gray-300 rounded w-full"
                        type="text"
                        placeholder="Novo Item"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        onChange={(e) => setNewItemDescription(e.target.value)}
                        value={newItemDescription}
                        className="text-gray-900 p-2 border border-gray-300 rounded w-full"
                        type="text"
                        placeholder="Descrição"
                      />
                    </td>
                    <td className="p-2">
                      <button
                        onClick={handleAddItem}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                      >
                        Adicionar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="p-8 bg-gray-600 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-100">Habilidades e Feitiços</h2>
            <div className="flex flex-col mt-4">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800 text-gray-200">
                    <th className="p-2">Habilidade</th>
                    <th className="p-2">Nível</th>
                    <th className="p-2">Escola</th>
                    <th className="p-2">Tempo de Conjuração</th>
                    <th className="p-2">Alcance</th>
                    <th className="p-2">Componentes</th>
                    <th className="p-2">Duração</th>
                  </tr>
                </thead>
                <tbody>
                  {characterData.skills.map((skill, index) => (
                    <tr key={index} className="bg-gray-700 text-gray-100">
                      <td className="p-2">{skill.name}</td>
                      <td className="p-2">Nível {index + 1}</td>
                      <td className="p-2">Escola {index % 3}</td>
                      <td className="p-2">1 ação</td>
                      <td className="p-2">60 pés</td>
                      <td className="p-2">V, S, M (um pouco de pó de ferro)</td>
                      <td className="p-2">Concentração, até 1 minuto</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-700 text-gray-100">
                    <td className="p-2">
                      <input
                        onChange={(e) => setNewSkillName(e.target.value)}
                        value={newSkillName}
                        className="text-gray-900 p-2 border border-gray-300 rounded w-full"
                        type="text"
                        placeholder="Nova Habilidade"
                      />
                    </td>
                    {/* Campos para as novas colunas */}
                    <td className="p-2">Nível X</td>
                    <td className="p-2">Escola Y</td>
                    <td className="p-2">1 ação</td>
                    <td className="p-2">60 pés</td>
                    <td className="p-2">V, S, M (material)</td>
                    <td className="p-2">Concentração, até 1 minuto</td>
                    <td className="p-2">
                      <button
                        onClick={handleAddSkill}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                      >
                        Adicionar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>

      <section className="w-full max-w-4xl p-8 bg-gray-600 shadow-lg rounded-lg mt-8">
        <h2 className="text-2xl font-bold text-gray-00">Notas</h2>
        <div className="flex flex-col mt-4">
          <textarea className="p-2 border border-gray-300 rounded" rows={6} placeholder="Escreva suas notas aqui..."></textarea>
        </div>
      </section>

      <button onClick={handleSave} className="mt-4 p-2 bg-green-600 hover:shadow-newShadow hover:shadow-emerald-400 transition duration-500 text-white font-semibold rounded">
        Salvar informações da ficha
      </button>
    </main>
  );
}
