import React, { useRef } from 'react';

const FormNoControlled = () => {

  const formulario = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    
    const data = new FormData(formulario.current);

    // console.log(...data.entries());

    const objetoDatos = Object.fromEntries([...data.entries()]);
    console.log(objetoDatos);

    const { todoDescripcion,todoName } = objetoDatos;

    if (!todoDescripcion.trim() || !todoName.trim()){
      console.log("Fill all the inputs");
      return;
    }
  };

  return (
    <>
        <h2>FormNoControlled</h2>
        <form ref={formulario} onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Input TODO'
                name='todoName'
                className='form-control mb-2'
                defaultValue='Tarea #01'
            ></input>
            <textarea
                name='todoDescription'
                className='form-control mb-2'
                placeholder='Type description'
                defaultValue='Descripción tarea #01'
            ></textarea>
            <select 
              name='todoEstado'
              className='form-control mb-2'
              defaultValue='Pendiente'
            >
                <option value='pendiente'>Pendiente</option>
                <option value='completada'>Completada</option>
            </select>
            <button className='btn btn-primary' type="submit">Agregar</button>
        </form>
    </>

  )
};

export default FormNoControlled;
