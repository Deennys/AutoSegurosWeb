'use server'

import { revalidatePath } from "next/cache"

export async function logar(cliente){
    const url = "https://api-autoseguros-production.up.railway.app/api/login"
    
    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(cliente)) ,
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url, options)
    if (resp.status !== 201){
        const json = await resp.json()
        const mensagens = json.reduce((str, erro) => str += ". " + erro.message, "")
        return {error: "Erro ao cadastrar" + mensagens}
    }

    revalidatePath("/cotacao")
    return {ok: "Conta cadastrada com sucesso"}
}