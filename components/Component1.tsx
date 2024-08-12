'use client';
import { PersonasContext } from '@/hooks/context/PersonasContext';
import { useContext } from 'react';
import { ButtonActions, ButtonLinks } from './buttons/Buttons';

export default function Component1() {
    const { personas, value, dispatch } = useContext(PersonasContext);

    const Aumentar = (): void => {
        dispatch({ type: 'aumentar' });
    };
    return (
        <section className='w-full flex flex-col flex-wrap justify-center items-center p-4'>
            <ButtonActions action={Aumentar} text='Aumentar' />
            <h1 className='text-2xl'>Value: {value}</h1>
            <table role='table' className='text-sm'>
                <thead className='border-4'>
                    <tr className='border-4'>
                        <th className='border-4 py-2 p-4'>ID</th>
                        <th className='border-4 py-2 p-4'>NOMBRE</th>
                        <th className='border-4 py-2 p-4'>APELLIDO</th>
                    </tr>
                </thead>
                <tbody className='border-x-4'>
                    {personas.slice(0, 5).map((item) => (
                        <tr key={item.id} className='border-4'>
                            <td className='border-4 py-2 px-5'>{item.id}</td>
                            <td className='border-4 py-2 px-5'>{item.name}</td>
                            <td className='border-4 py-2 px-5'>{item.lastname}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
