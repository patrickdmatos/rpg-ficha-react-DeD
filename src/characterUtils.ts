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
