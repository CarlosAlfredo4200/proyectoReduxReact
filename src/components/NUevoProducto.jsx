import React from "react";

const NUevoProducto = () => {
  return (
    <div className="row justify-container-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar nuevo producto
            </h2>

            <form>
              <div className="form-group">
                <label>Nombre Producto</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del producto"
                  name="nombre"
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>

                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio del producto"
                  name="precio"
                />
              </div>

            </form>

            <button type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
            >Agregar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NUevoProducto;
