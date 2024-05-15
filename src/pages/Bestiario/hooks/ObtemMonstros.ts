// hooks/ObtemMonstros.ts

import { useQuery } from 'react-query';
import axios from 'axios';
import { urlBase } from "../../../ServerConfig";

interface IMonstros {
    count: number
    results: []
}

export const ObtemMonstros = () => {
    return useQuery<IMonstros[], Error>('monstros', async () => {
        const response = await axios.get(`${urlBase}/api/monsters`);
        return response.data;
    });
};
