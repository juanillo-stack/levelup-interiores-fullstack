import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import { Home } from "./pages/Home";
import { ProductosPage } from "./pages/Productos";
import { ClientesPage } from "./pages/Clientes";
import { FacturasPage } from "./pages/Facturas";
import { EmpresasPage } from "./pages/Empresas";
import { SolicitudesPresupuestoPage } from "./pages/SolicitudesPresupuesto";
import { AvisoLegalPage } from "./pages/AvisoLegal";
import { PrivacidadPage } from "./pages/Privacidad";
import { CookiesPage } from "./pages/Cookies";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aviso-legal" element={<AvisoLegalPage />} />
        <Route path="/privacidad" element={<PrivacidadPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/facturas" element={<FacturasPage />} />
        <Route path="/empresas" element={<EmpresasPage />} />

        <Route
          path="/solicitudesPresupuesto"
          element={<SolicitudesPresupuestoPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;