import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./paginas/Login";
import Registrar from "./paginas/Registrar";
import NuevoPassword from "./paginas/NuevoPassword";
import OlvidePassword from "./paginas/OlvidePassword";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";

import { AuthProvider } from "./context/AuthProvider";
import { RutaProtegida } from "./layouts/RutaProtegida";
import { Proyectos } from "./paginas/Proyectos";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="registrar" index element={<Registrar />} />
            <Route path="olvide-password" index element={<OlvidePassword />} />
            <Route path="olvide-password/:token" index element={<NuevoPassword />} />
            <Route path="confirmar/:id" index element={<ConfirmarCuenta />} />
          </Route>

          <Route path="/proyectos" element={<RutaProtegida />}>
            <Route index element={<Proyectos />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
