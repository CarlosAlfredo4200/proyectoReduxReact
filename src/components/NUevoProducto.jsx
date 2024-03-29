import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";

//action redux

import { crearNuevoProductoActions } from "../actions/productoActions";
const NUevoProducto = () => {

  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')


  // utilizar useDispatch y te crea una funcion
  const dispatch = useDispatch();

  const agregarProducto = (producto) => dispatch(crearNuevoProductoActions(producto));


  const submitNuevoProducto = e => {
    e.preventDefault();
    // validar formulario, revisar errores y crear el nuevo producto
    if (nombre.trim() === '' || precio <= 0) {
      return;
    }
    agregarProducto({ 
      nombre,
      precio
    });
  }
  return (
    <div className="row justify-container-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar nuevo producto
            </h2>

            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label>Nombre Producto</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del producto"
                  name="nombre"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>

                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio del producto"
                  name="precio"
                  value={precio}
                  onChange={e => setPrecio(Number(e.target.value))}
                />
              </div>


              <button type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >Agregar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NUevoProducto;
