import React from 'react';
import Link from 'next/link';
import Header from '../components/Header/Header';


export default function page() {
  return (
    <div div className="bg-sky-600 h-screen">
        <Header login={true} />
        <div className='bg-white rounded-2xl w-6/12 mx-auto'>
            <form action="" className='flex flex-col'>
                <label htmlFor="name" className='text-xl mx-10 px-3 mb-5 font-bold'>Nome Completo:</label>
                <input type="text" id='name' className='bg-blue-400 rounded-2xl h-16 mx-10 mb-9' />
                <label htmlFor="name" className='text-xl mx-10 px-3 mb-5 font-bold'>Email ou CPF:</label>
                <input type="text" id='name' className='bg-blue-400 rounded-2xl h-16 mx-10 mb-9' />
                <label htmlFor="name" className='text-xl mx-10 px-3 mb-5 font-bold'>Senha:</label>
                <input type="password" id='name' className='bg-blue-400 rounded-2xl h-16 mx-10' />
                <button type="submit" className='bg-yellow-300 mx-auto my-7 px-24 py-7 text-2xl font-extrabold rounded-2xl'>Criar conta</button>
            </form>
            <p>Já tem conta? <Link href='/login' className='text-red-700 font-bold'>Login</Link></p>
        </div>

    </div>
  )
}
