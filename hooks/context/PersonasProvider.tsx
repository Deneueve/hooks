'use client';
import React, { useReducer } from 'react';
import { PersonasContext } from './PersonasContext';
import { usePersonas } from '../usePersonas';
import { useReduce } from '../reduce/useReduce';

interface Props {
    children: JSX.Element[] | React.ReactNode | JSX.Element;
}
const retult = () => {};
export default function PersonasProvider({ children }: Props) {
    // useReducer
    const { inicializador, ValueReduce } = useReduce();
    const [{ value }, dispatch] = useReducer(ValueReduce, inicializador);
    // useState
    const { personas } = usePersonas();
    return (
        <>
            <PersonasContext.Provider value={{ personas, value, dispatch }}>{children}</PersonasContext.Provider>;
        </>
    );
}
