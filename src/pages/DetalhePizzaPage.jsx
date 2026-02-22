import React from "react";
import { useParams } from "react-router-dom"; // Importar useParams
function DetalhePizzaPage() {
  const { id } = useParams(); // Extrair o parâmetro 'id' da URL
  return (
    <div>
      <h1>Detalhes da Pizza #{id}</h1>
      <p>
        Aqui serão exibidas as informações detalhadas da pizza com ID: {id}{" "}
      </p>
      {/* Em quinzenas futuras, buscaremos os dados reais da pizza aqui */}
    </div>
  );
}
export default DetalhePizzaPage;
