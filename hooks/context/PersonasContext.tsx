import { createContext } from 'react';
import { actions } from '../reduce/useReduce';
interface ContextType {
    personas: Personas[];
    value: number;
    dispatch: React.Dispatch<actions>;
}

export const PersonasContext = createContext<ContextType>({} as ContextType);
