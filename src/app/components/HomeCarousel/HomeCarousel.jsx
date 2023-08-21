'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import roubo from '../../../../public/Roubo e furto.svg';
import eventosNaturais from '../../../../public/Eventos naturais.svg';
import incendio from '../../../../public/Incendio.svg';
import colisao from '../../../../public/Colisao.svg';
import percaTotal from '../../../../public/Perca total.svg';

const HomeCarousel = () => {
    const items = ['Roubo e furto', 'Eventos naturais', 'Incendio', 'Colisao', 'Perca total'];
    const imgs = [roubo, eventosNaturais, incendio, colisao, percaTotal]

    const [currentIndex, setCurrentIndex] = useState(0);

    const rotateLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    const rotateRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    function autoRotate() {
        setTimeout(() => {
            rotateRight()
            autoRotate()
        }, 4000)
    }

    useEffect(() => {
        autoRotate()
    }, [])

    return (
        <div className="relative flex justify-center items-center h-auto">
            <div className="relative p-8 rounded-xl shadow-lg w-1/2 bg-white border-4 border-black">
                <div className="text-center">
                    <Image src={imgs[currentIndex]} alt="Image" className='mx-auto h-64' width={300}/>
                    <h2 className='mt-5 text-3xl font-bold'>{items[currentIndex]}</h2>
                    <button
                        className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-transparent text-gray-400 hover:text-white ml-4 px-4 py-2 rounded-full hover:bg-blue-600  transition duration-300"
                        onClick={rotateLeft}
                    >
                        &lt;
                    </button>
                    <button
                        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-transparent text-gray-400 hover:text-white mr-4 px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                        onClick={rotateRight}
                    >
                        &gt;
                    </button>
                    <div className='mt-4 -mb-5'>
                        {items.map((item, index) => (
                            <button key={index} onClick={(e) => {
                                e.preventDefault()
                                setCurrentIndex(index)
                            }} className={`${index === currentIndex ? 'bg-purple-700' : 'bg-gray-600'} w-6 h-6 mx-2 rounded-full`} />
                        ))}
                    </div>
                    <button>Faça sua cotação</button>
                </div>
            </div>
        </div>
    );
};

export default HomeCarousel;
