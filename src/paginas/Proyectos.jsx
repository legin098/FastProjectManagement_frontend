import useProyectos from "../hooks/useProyectos"


export const Proyectos = () => {

  const {Proyectos}= useProyectos()
  
  return (
    <>
    
      <h1 className="text-4xl font-black">Proyectos</h1>

      <div>

      </div>
    
    </>
  )
}

export default Proyectos
