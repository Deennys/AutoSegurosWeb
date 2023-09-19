import React from "react";
import Header from "../components/Header/Header";

async function getPlano() {
  const url = "https://api-autoseguros-production.up.railway.app/api/assinar";

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyb2dlcmlvQGdtYWlsLmNvbSIsImlzcyI6IlNlZ3Vyb0F1dG9tb3Rpdm8iLCJleHAiOjE2OTUwOTIwMTJ9.8RLTtA_UXC2lLkFg_QZGHBt-qGiIrIC2IjiW8mQg2KY";

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const response = await fetch(url, {
    next: { revalidate: 0 },
    method: "GET",
    headers: headers,
  });

  return response.json();
}

export default async function page() {
  const data = await getPlano();
  return (
    <div div className="bg-sky-600 h-screen">
      <Header login={true} />
      <div className="flex flex-col justify-center items-center bg-neutral-100 w-3/5 m-auto rounded-2xl">
        <div className="">
          <h3 className="font-extrabold text-2xl">Seu plano irá cobrir:</h3>
        </div>
        <div>
          {data.map((data) => (
            <div className="w-full mt-2 bg-zinc-200">
              <div className="flex justify-center">
                <h3>data.valor</h3>
              </div>
              <div className="flex">
                <span></span>
                <h3>data.servicosNome</h3>
              </div>
            </div>
          ))}
          <div className="flex flex-row items-center justify-center">
            <div className="flex items-center">
              <button
                type="button"
                className="w-5/5 bg-blue-400 mx-auto my-7 px-20 h-20 py-7 text-xl font-extrabold rounded-2xl"
              >
                Alterar
              </button>
            </div>
            <div className="ml-4 flex items-center">
              <button
                type="button"
                className="w-5/5 bg-green-600 mx-auto my-7 px-10 h-20 py-7 text-xl font-extrabold rounded-2xl"
              >
                Assinar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
