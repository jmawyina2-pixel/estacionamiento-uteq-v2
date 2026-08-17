import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Inicio } from './pages/Inicio';
import { Estacionamiento } from './pages/Estacionamiento';
import { DetalleEspacio } from './pages/DetalleEspacio';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/estacionamiento" element={<Estacionamiento />} />
        <Route path="/espacios/:id" element={<DetalleEspacio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;