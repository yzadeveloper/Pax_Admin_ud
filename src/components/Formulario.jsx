import { useState, useEffect } from "react";
import Error from './Error'

const Formulario = ({ pacientes, setPacientes }) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault();

      //Validación del Formulario
      if([ nombre, propietario, email, fecha, sintomas].includes('') ) {
        console.log('Hay al menos un campo vacío')

        setError(true)
        return;
      } 
      setError(false)

      //Objeto de Paciente
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas
      }

      //console.log(objetoPaciente)

      setPacientes([...pacientes, objetoPaciente]);

      //Reiniciar el Form
      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')
    }
  
  
    return (
        <div className="md:w-1/2 lg:w-2/5">
          <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-5">
            Añade Pacientes y {''} 
            <span className="text-indigo-600 font-bold">Adminístralos</span> 
          </p>

          <form
            onSubmit={handleSubmit}
             className="bg-white shadow-md rounded-lg py-5 px-5 mb-10 mx-3">
            
            { error && <Error><p>Todos los campos son obligatorios</p></Error>}
            <div className="mb-5">
              <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>

              <input
                id="mascota"
                type="text"
                placeholder="Nombre de la Mascota"
                className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                value={nombre}
                onChange={ (e) => setNombre(e.target.value) }

              />

            </div>

            <div className="mb-5">
              <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Propietario</label>

              <input
                id="propietario"
                type="text"
                placeholder="Nombre del Propietario"
                className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                value={propietario}
                onChange={ (e) => setPropietario(e.target.value) }
              />

            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>

              <input
                id="email"
                type="email"
                placeholder="Dirección de email"
                className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                value={email}
                onChange={ (e) => setEmail(e.target.value) }
              />

            </div>

            <div className="mb-5">
              <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">Fecha Alta</label>

              <input
                id="fecha"
                type="date"
                className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                value={fecha}
                onChange={ (e) => setFecha(e.target.value) }
              />

            </div>

            <div className="mb-5">
              <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>

              <textarea 
                id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md" placeholder="Describe los síntomas"
                value={sintomas}
                onChange={ (e) => setSintomas(e.target.value) }
                ></textarea>
            </div>

            <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value="Agregar Paciente" />

            
          </form>
        </div>
    )
  }

export default Formulario;