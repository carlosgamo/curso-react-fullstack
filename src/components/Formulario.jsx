import { useState } from "react";

const Formulario = () => {

    const [todo, setTodo] = useState({
        todoName: '',
        todoDescripcion: '',
        todoEstado: 'pendiente',
        todoCheck: false
    });

    const [error, setError] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        const {todoName, todoDescripcion} = todo;
        
        if (!todoDescripcion.trim() || !todoName.trim()){
            setError(true);
            return;
        }
        
        setError(false);
        
    };

    const handleChange = (e) => {
        const {name, value, checked, type } = e.target; //Destructure

        setTodo({
            ...todo,
            [name] : type === "checkbox" ? checked: value,
            // [e.target.name] : e.target.type === "checkbox" ? e.target.checked: e.target.value,
        })
    };

    const PintarError =  () => (
        <div className="alert alert-danger">Campos obligatorios</div>
    );

    return (
        <>
            <h2>Formulario controlado</h2>

            {/* {error ? <PintarError/> : null} */}
            {error && <PintarError/>} {/*Es lo mismo que la línea anterior*/}

            <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Input TODO'
                name='todoName'
                className='form-control mb-2'
                onChange={handleChange}
                value={todo.todoName}
            ></input>
            <textarea
                name='todoDescripcion'
                className='form-control mb-2'
                placeholder='Type descripcion'
                onChange={handleChange}
                value={todo.todoDescripcion}
            ></textarea>
            <select 
              name='todoEstado'
              className='form-control mb-2'
              onChange={handleChange}
              value={todo.todoEstado}
            >
                <option value='pendiente'>Pendiente</option>
                <option value='completada'>Completada</option>
            </select>

            <div className="form-check">
            <input 
                name="todoCheck"
                className="form-check-input" 
                type="checkbox" 
                onChange={handleChange}
                checked={todo.todoCheck}
            />
            <label 
                className="form-check-label" 
                htmlFor="flexCheckDefault"
            >
                Dar prioridad
            </label>
            </div>


            <button className='btn btn-primary' type='submit'>Agregar</button>
        </form>
        </>
    );
};

export default Formulario;