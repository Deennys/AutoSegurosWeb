import Image from 'next/image';
import logo from '../../../../public/Logo.svg'
import React from 'react';

export default function Header() {
  return (
    <div className='flex justify-between  h-48'>
        <Image src={logo} width={200} height={100} className='ml-16'></Image>
        <div>
            <button>
                Cadastre-se
            </button>
            <button>
                Entrar
            </button>
        </div>
    </div>
  )
}
