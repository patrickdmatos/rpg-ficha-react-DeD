// hooks/ObtemMonstros.ts

import { useQuery } from 'react-query';
import axios from 'axios';
import { urlBase } from "../../../ServerConfig";

interface IMonstros {
    count: number
    results: []
}


interface IArmorClass {
    type: string;
    value: number;
}

interface ISpeed {
    walk: string;
    swim: string;
}

interface IProficiency {
    value: number;
    proficiency: {
        index: string;
        name: string;
        url: string;
    };
}

interface IDamageType {
    index: string;
    name: string;
    url: string;
}

interface IDamage {
    damage_type: IDamageType;
    damage_dice: string;
}

interface IAction {
    name: string;
    multiattack_type?: string;
    desc: string;
    actions?: Array<{
        action_name: string;
        count: number;
        type: string;
    }>;
    attack_bonus?: number;
    dc?: {
        dc_type: {
            index: string;
            name: string;
            url: string;
        };
        dc_value: number;
        success_type: string;
    };
    damage?: IDamage[];
}

interface ILegendaryAction {
    name: string;
    desc: string;
    attack_bonus?: number;
    damage?: IDamage[];
}

interface IMonstrosInfos {
    index: string;
    name: string;
    size: string;
    type: string;
    alignment: string;
    armor_class: IArmorClass[];
    hit_points: number;
    hit_dice: string;
    hit_points_roll: string;
    speed: ISpeed;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    proficiencies: IProficiency[];
    damage_vulnerabilities: string[];
    damage_resistances: string[];
    damage_immunities: string[];
    condition_immunities: string[];
    senses: {
        darkvision: string;
        passive_perception: number;
    };
    languages: string;
    challenge_rating: number;
    proficiency_bonus: number;
    xp: number;
    special_abilities: Array<{
        name: string;
        desc: string;
        dc?: {
            dc_type: {
                index: string;
                name: string;
                url: string;
            };
            dc_value: number;
            success_type: string;
        };
    }>;
    actions: IAction[];
    legendary_actions: ILegendaryAction[];
    image: string;
    url: string;
}
export const useObtemArrayMonstros = () => {
    return useQuery<IMonstros[], Error>('monstros', async () => {
        const listaMonstros = await axios.get(`${urlBase}/api/monsters`);
        const arrayMonstrosPorTamanho: { Tiny: IMonstrosInfos[], Small: IMonstrosInfos[], Medium: IMonstrosInfos[], Large: IMonstrosInfos[], Huge: IMonstrosInfos[], Gargantuan: IMonstrosInfos[] } = { Tiny: [], Small: [], Medium: [], Large: [], Huge: [], Gargantuan: [] }

        for (let i = 334; i < listaMonstros.data.count; i++) {
            console.log('index', i , listaMonstros.data.results[i].index);
            
            const response: { data: IMonstrosInfos } = await axios.get(`${urlBase}${listaMonstros.data.results[i].url}`);
            if (response.data.size === 'Tiny') arrayMonstrosPorTamanho.Tiny.push(response.data)
            if (response.data.size === 'Small') arrayMonstrosPorTamanho.Small.push(response.data)
            if (response.data.size === 'Medium') arrayMonstrosPorTamanho.Medium.push(response.data)
            if (response.data.size === 'Large') arrayMonstrosPorTamanho.Large.push(response.data)
            if (response.data.size === 'Huge') arrayMonstrosPorTamanho.Huge.push(response.data)
            if (response.data.size === 'Gargantuan') arrayMonstrosPorTamanho.Gargantuan.push(response.data)
        }

        return arrayMonstrosPorTamanho;
    });
};
