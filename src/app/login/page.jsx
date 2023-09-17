'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header/Header';
import { logar } from "@/actions/cadastrar";


export default function page() {
  const [messagem, setMessage] = useState("")

    async function handleSubmit(cliente){
        const resp = await logar(cliente)
        console.log(resp)
        if (resp.error){
            setMessage(resp.error)
            return
        }
        redirect("/cotacao")
    }

  return (
    <div div className="bg-sky-600 min-h-[100vh]">
        <Header login={true} />
        <div className='bg-white rounded-2xl w-6/12 mx-auto'>
            <form action={handleSubmit} className='flex flex-col'>
                <label htmlFor="user" className='text-xl mx-10 px-3 mb-5 font-bold'>Email ou CPF:</label>
                <input type="text" id='user' className='bg-blue-400 rounded-2xl h-16 mx-10 mb-9' />
                <label htmlFor="password" className='text-xl mx-10 px-3 mb-5 font-bold'>Senha:</label>
                <input type="password" id='password' className='bg-blue-400 rounded-2xl h-16 mx-10' />
                <button type="submit" className='bg-yellow-300 mx-auto my-7 px-24 py-7 text-2xl font-extrabold rounded-2xl'>Criar conta</button>
            </form>
            <p>Não tem conta? <Link href='/cadastrar' className='text-red-700 font-bold'>Cadastrar-se</Link></p>
        </div>
      <h3>{messagem}</h3>
    </div>
  )
}
