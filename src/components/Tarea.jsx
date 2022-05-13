import { formatearFecha } from "../helpers/formatearFecha";
import useProyectos from "../hooks/useProyectos";


export const Tarea = ({ tarea }) => {
  const { descripcion, nombre, prioridad, fechaEntrega, estado, _id } = tarea;
  const { handleModalEditarTarea } = useProyectos();

  return (
    <div className="border-b p-5 flex justify-between items-center">
      <div>
        <p className="text-xl mb-2">{nombre}</p>
        <p className="text-sm text-gray-500 uppercase mb-2">{descripcion}</p>
        <p className="text-sm mb-2">{formatearFecha(fechaEntrega)}</p>
        <p className="text-gray-600 mb-2">Prioridad: {prioridad}</p>
      </div>
      <div className='flex gap-2'>
        <button
          onClick={() => handleModalEditarTarea(tarea)}
          className="bg-indigo-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
        >
          Editar
        </button>
        {
          estado ?
          (
            <button className="bg-sky-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg">Completa</button>
          ) : (
            <button className="bg-gray-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg">Incompleta</button>
          )
        }
        <button className="bg-red-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg">Eliminar</button>
      </div>
    </div>
  );
};
