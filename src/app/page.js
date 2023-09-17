import Link from 'next/link';
import HomeCarousel from "./components/HomeCarousel/HomeCarousel";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <div className="header bg-sky-600 min-h-full">
      <Header login={false}/>
      <div className="flex justify-evenly items-center ">
        <h1 className="font-bold text-2xl w-1/2">O que nosso autoSeguro cobre:</h1>
      </div>
      <HomeCarousel />
      <div className='flex justify-center'>
        <Link href='/cotacao' className='bg-yellow-400 text-2xl font-bold my-11 py-7 px-24 rounded-xl'>
          Faça sua cotação
        </Link>
      </div>
    </div>
  )
}
