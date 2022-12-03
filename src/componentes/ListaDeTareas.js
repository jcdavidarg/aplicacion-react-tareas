import React from "react";
import "../hojas-de-estilo/ListaDeTareas.css";
import TareaFormulario from "./TareaFormulario";

const ListaDeTareas = () => {
  return (
    <>
      <TareaFormulario />
      <div className="tareas-lista-contenedor">LISTA DE TAREAS</div>
    </>
  );
};

export default ListaDeTareas;
