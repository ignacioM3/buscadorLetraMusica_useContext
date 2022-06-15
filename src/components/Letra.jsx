import useLetras from "../hooks/useLetras"


const Letra = () => {
    const {letra, load} = useLetras()

  return load ? 'Cargando...' : <div className="letra">{letra}</div>
  
}

export default Letra