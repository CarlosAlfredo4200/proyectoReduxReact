import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <div className="container">
          <h1>
            <Link to={"/"} className="text-light">CRED-REACT ,redux REST API & Axios</Link>
          </h1>
        </div>
        <Link
          to={"/productos/nuevo"}
          className="btn btn-danger nuevo-post d-block d-md-inline-block"
        >
          Agregar Producto &#43;
        </Link>
      </div>
    </div>
  );
};

export default Header;
