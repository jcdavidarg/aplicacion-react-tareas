import React from "react";
import "../hojas-de-estilo/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Tarea = ({ texto, completada }) => {
  return (
    <div
      className={completada ? "tarea-contenedor comletada" : "tarea-contenedor"}
    >
      <div className="tarea-texto">{texto}</div>
      <div className="tarea-contenedor-iconos">
        <AiOutlineCloseCircle className="tarea-icono" />
      </div>
    </div>
  );
};

export default Tarea;
