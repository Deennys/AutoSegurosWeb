import React from "react";
import Header from "../components/Header/Header";

async function getServicos() {
  const url = "https://api-autoseguros-production.up.railway.app/api/Servico";
  
  const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyb2dlcmlvQGdtYWlsLmNvbSIsImlzcyI6IlNlZ3Vyb0F1dG9tb3Rpdm8iLCJleHAiOjE2OTUwOTIwMTJ9.8RLTtA_UXC2lLkFg_QZGHBt-qGiIrIC2IjiW8mQg2KY";

  const headers = {
    'Authorization': `Bearer ${token}`, 
    'Content-Type': 'application/json', 
  }

  const response = await fetch(url, { 
    next: { revalidate: 0 },
    method: 'GET',
    headers: headers,
   });

  return response.json();
}

export default async function page() {
  const data = await getServicos();
  return (
    <div div className="bg-sky-600 min-h-full">
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
            <button type="button" className="w-4/5 bg-blue-400 mx-auto my-7 px-20 h-20 py-7 text-xl font-extrabold rounded-2xl">
              Ver Plano
            </button>
          </div>
          <div className="flex flex-col items-center">
            {data?.map((data) => (
              <div className="flex">
                <button className="text-2xl" key={data.id}>
                </button>
                <span></span>data.servicosNome
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
