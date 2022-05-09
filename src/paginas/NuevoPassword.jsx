import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";

const NuevoPassword = () => {
  const [password, setPassword] = useState("");
  const [tokenValido, setTokenValido] = useState(false);
  const [alerta, setAlerta] = useState({});
  const [passwordModificado, setPasswordModificado] = useState(false);

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios.get(`/usuarios/restablecer-password/${token}`);
        setTokenValido(true);
      } catch (e) {
        setAlerta({ msg: e.response.data.msg, error: true });
      }
    };
    comprobarToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setAlerta({ msg: "El password debe tener al menos 6 caracteres", error: true });
      return;
    }

    try {
      const url = `/usuarios/restablecer-password/${token}`;
      const { data } = await clienteAxios.post(url, { password });
      setAlerta({ msg: data.msg, error: false });
      setPasswordModificado(true);
    } catch (e) {
      setAlerta({ msg: e.response.data.msg, error: true });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Restablece tu password y no pierdas acceso a tus <span className="text-slate-700">proyectos</span>
      </h1>

      {msg && <Alerta alerta={alerta} />}

      {tokenValido && (
        <form className="my-10 bg-white shadow rounded-lg p-10" onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block tex-xl font-bold" htmlFor="password">
              Nuevo Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Escribe tu Nuevo Password"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Guardar Nuevo Password"
            className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hove:bg-sky-800 transition-colors"
          />
        </form>
      )}
      {passwordModificado && (
        <Link className="block text-center my-5 text-slate-500 uppercase text-sm" to="/">
          Inicia Sesión
        </Link>
      )}
    </>
  );
};

export default NuevoPassword;
