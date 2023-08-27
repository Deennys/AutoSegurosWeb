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
    <div>
      <Header login={true} />
      <div>
        <h3>Selecione o que seu plano irá cobrir</h3>
      </div>
      <div>
        <div>
          <div></div>
          <div>
            <button>Ver Plano</button>
          </div>
        </div>
        <div>
        {data.map((data) => (
           <p key={data.id}>data.nome</p>      
        ))}
        </div>
      </div>
    </div>
  );
}
