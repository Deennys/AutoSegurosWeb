import Link from 'next/link';
import HomeCarousel from "./components/HomeCarousel/HomeCarousel";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <div className="header bg-sky-600 h-screen">
      <Header />
      <div className="flex justify-evenly items-center ">
        <h1 className="font-bold text-2xl w-1/2">O que nosso autoSeguro cobre:</h1>
      </div>
      <HomeCarousel />
      <Link href='/cotacao' className='mx-auto my-11'>
        Faça sua cotação
      </Link>
    </div>
  )
}
