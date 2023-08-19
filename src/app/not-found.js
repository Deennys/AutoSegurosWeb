import Link from "next/link";

export default function NotFound(){
    return(
        <main>
            <h2>404 - Página não encontrada</h2>
            <Link href="/">Voltar para home</Link>
        </main>
    )
}