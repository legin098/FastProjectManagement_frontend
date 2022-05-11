import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useProyectos from "../hooks/useProyectos"


export const Proyecto = () => {

  const { id } = useParams()
  const { obtenerProyecto, proyecto, cargando } = useProyectos()

  const { nombre } = proyecto

  useEffect(() => {
    obtenerProyecto(id)
  }, [])

  return (
    cargando ? 'Cargando...' : (
      <div>
        <h1 className='font-black text-4xl'>{nombre}</h1>
      </div>
    )
  )
}
