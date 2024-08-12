import React from 'react';

export default function Header() {
    return (
        <header className='w-full flex flex-wrap justify-around items-center border-b-2 border-neutral-200 py-2 p-4'>
            <h1 className='font-bold text-4xl cursor-default'>Deneueve</h1>
            <nav className='flex gap-x-4 font-semibold text-sm'>
                <a href='' className='hover:text-blue-800 hover:border-b-2 hover:border-black transition duration-300'>
                    Component1
                </a>
                <a href='' className='hover:text-blue-800 hover:border-b-2 hover:border-black transition duration-300'>
                    Component2
                </a>
                <a href='' className='hover:text-blue-800 hover:border-b-2 hover:border-black transition duration-300'>
                    Component3
                </a>
            </nav>
        </header>
    );
}
