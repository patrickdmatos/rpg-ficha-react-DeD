type Weapon = {
    name: string;
    type: string;
    damage: string;
    numCurrent: number | string;
    numMax: number | string;
    attack: number | string;
    reach: string;
    defect: number;
    area: string;
};

type Skill = {
    name: string;
    proficiency: boolean;
};

type Spell = {
    name: string;
    level: number;
    school: string;
    castingTime: string;
    range: string;
    components: string;
    duration: string;
    description: string;
};

export type CharacterData = {
    name: string;
    player: string;
    class: string;
    level: number;
    race: string;
    background: string;
    alignment: string;
    experience: number;
    attributes: {
        strength: number;
        dexterity: number;
        constitution: number;
        intelligence: number;
        wisdom: number;
        charisma: number;
    };
    hitPoints: {
        current: number;
        max: number;
    };
    armorClass: number;
    initiative: number;
    speed: number;
    weapons: Weapon[];
    skills: Skill[];
    spells: Spell[];
    equipment: string[];
    backgroundDetails: string;
};

const LOCAL_STORAGE_KEY = 'characterData';

export const saveCharacterData = (data: CharacterData): void => {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(LOCAL_STORAGE_KEY, serializedData);
    } catch (error) {
        console.error('Failed to save character data to local storage:', error);
    }
};

export const loadCharacterData = (): CharacterData | null => {
    try {
        const serializedData = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (serializedData === null) {
            return null;
        }
        return JSON.parse(serializedData) as CharacterData;
    } catch (error) {
        console.error('Failed to load character data from local storage:', error);
        return null;
    }
};

// characterUtils.ts

import { useState } from "react";

interface NewItem {
    name: string;
    description: string;
}

interface NewSkill {
    name: string;
    description: string;
}

export function useCharacterUtils() {
    const [newItem, setNewItem] = useState<NewItem>({
        name: "",
        description: ""
    });

    const [newSkill, setNewSkill] = useState<NewSkill>({
        name: "",
        description: ""
    });

    const handleChangeItem = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewItem({
            ...newItem,
            name: e.target.value
        });
    };

    const handleChangeSkill = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewSkill({
            ...newSkill,
            name: e.target.value
        });
    };

    const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>, type: "item" | "skill") => {
        const { value } = e.target;
        if (type === "item") {
            setNewItem({
                ...newItem,
                description: value
            });
        } else if (type === "skill") {
            setNewSkill({
                ...newSkill,
                description: value
            });
        }
    };

    const addNewItem = () => {
        // Implementar lógica para adicionar o novo item ao estado principal (characterData)
        console.log("Novo item adicionado:", newItem);
        // Limpar o estado do novo item
        setNewItem({ name: "", description: "" });
    };

    const addNewSkill = () => {
        // Implementar lógica para adicionar a nova habilidade ao estado principal (characterData)
        console.log("Nova habilidade adicionada:", newSkill);
        // Limpar o estado da nova habilidade
        setNewSkill({ name: "", description: "" });
    };

    return {
        newItem,
        newSkill,
        handleChangeItem,
        handleChangeSkill,
        handleChangeDescription,
        addNewItem,
        addNewSkill
    };
}