import Header from "./components/Header";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Productos from "./components/Productos";
import NUevoProducto from "./components/NUevoProducto";
import EditarProducto from "./components/EditarProducto";

function App() {
  return (
   
    <BrowserRouter>
         <Header />
         

      <div className="container mt-5">

           <Routes>
              <Route exact path="/" element={ <Productos />} />
              <Route exact path="/productos/nuevo" element={ <NUevoProducto />} />
              <Route exact path="/productos/editar/:id" element={ <EditarProducto />} />
           </Routes>



        </div>

      
    </BrowserRouter>
    
     
  );
}

export default App;
