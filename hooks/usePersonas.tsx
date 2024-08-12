import { useState } from 'react';
import data from '../data/personas.json';

export const usePersonas = () => {
    const [personas, setPersonas] = useState<Personas[]>(data);

    return { personas, setPersonas };
};
