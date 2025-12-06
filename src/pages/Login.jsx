import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (isAuthenticated) {
    return <Navigate to="/favoritos" replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
    navigate("/favoritos", { replace: true });
  };

  return (
    <main className="min-h-[calc(100vh-7rem)] flex items-center justify-center">
      <div className="w-full max-w-xs">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="flex flex-col text-sm">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-3 text-white focus:outline-none focus:border-[#EDF252] placeholder:text-gray-500 border-b border-gray-500"
              placeholder="Nombre de usuario"
              required
            />
          </label>
          <label className="flex flex-col text-sm">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-3 text-white focus:outline-none focus:border-[#EDF252] placeholder:text-gray-500 border-b border-gray-500"
              placeholder="Contraseña"
              required
            />
          </label>
          <button type="submit" className="mt-8 w-full py-3 rounded-full bg-[#EDF252] text-black font-semibold hover:bg-white transition-colors">
            Iniciar sesión
          </button>
        </form>
      </div>
    </main>
  );
}
