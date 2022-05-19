import React from "react";
import useProyectos from "../hooks/useProyectos";


export const Colaborador = ({ colaborador }) => {
  const { handleModalEliminarColaborador } = useProyectos();
  const { nombre, email, _id } = colaborador;

  return (
    <div className="border-b p-5 flex justify-between items-center">
      <div>
        <p>{nombre}</p>
        <p className="text-sm text-gray-700">{email}</p>
      </div>
      <div>
        <button 
          type="button" 
          className="bg-red-600 px-4 py-3 text-white rounded-lg uppercase font-bold text-sm"
          onClick={() => handleModalEliminarColaborador(colaborador)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
