import React from "react";
import Header from "../components/Header/Header";

async function getPlanos() {
  const url = "http://localhost:8080/api/Servico";
  const response = await fetch(url, { next: { revalidate: 0 } });
  return response.json();
}

export default async function page() {
  const data = await getPlanos();
  return (
    <div div className="bg-sky-600 h-screen">
      <Header login={true} />
      <div className="flex flex-col justify-center items-center bg-neutral-100 w-3/5 m-auto rounded-2xl">
        <div>
          <h3 className="font-extrabold text-2xl">
            Selecione o que seu plano irá cobrir:
          </h3>
        </div>
        <div className="w-full mt-2">
          <div className="flex justify-center">
            <h3>R$5.000,00</h3>
          </div>
          <div className="flex justify-center">
            <button className="w-4/5 bg-blue-400 mx-auto my-7 px-20 h-20 py-7 text-xl font-extrabold rounded-2xl">
              Ver Plano
            </button>
          </div>
          <div className="flex flex-col items-center">
            {data.map((data) => (
              <div className="flex">
                <button className="text-2xl" key={data.id}>
                </button>
                <span></span>data.nome
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
