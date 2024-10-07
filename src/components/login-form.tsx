import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/inicio");
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
      <h1 className="font-bold text-2xl">¡Bienvenido de nuevo!</h1>
      <form
        className="flex flex-col bg-white rounded shadow-lg p-12 mt-12"
        action=""
      >
        <label className="font-semibold text-xs" htmlFor="mail">
          Correo electrónico
        </label>
        <input
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="text"
        />
        <label className="font-semibold text-xs mt-3" htmlFor="passwordField">
          Password
        </label>
        <input
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="password"
        />
        <button
          onClick={handleLogin}
          className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700"
        >
          Login
        </button>
        <div className="flex mt-6 justify-center text-xs">
          <Link className="text-blue-400 hover:text-blue-500" to="/">
            Volver al sitio web
          </Link>
        </div>
      </form>
    </div>
  );
}
