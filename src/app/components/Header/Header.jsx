"use client";

import Image from 'next/image';
import logo from '../../../../public/Logo.svg'
import Link from 'next/link';
import React from 'react';

export default function Header({ login }) {
    return (
        <div className='flex justify-between items-center h-48'>
            <Link href='/'>
                <Image src={logo} width={200} height={100} className='ml-16'></Image>
            </Link>
            {!login &&
                (<div>
                    <Link href='/cadastrar' className='mx-6 px-12 py-6 text-1xl font-bold text-black bg-white rounded-xl'>
                        Cadastre-se
                    </Link>
                    <Link href='/login' className='mx-6 mr-20 px-12 py-6 text-1xl font-bold text-black bg-yellow-400 rounded-xl'>
                        Entrar
                    </Link>
                </div>)    
            }
        </div>
    )
}
