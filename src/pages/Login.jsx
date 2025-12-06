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
    <main className="min-h-[calc(100vh-140px)] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-black/50 border border-white/10 rounded-xl p-8 shadow-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center">Iniciar sesión</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-gray-300">Email o usuario</span>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF6500] placeholder:text-gray-500"
              placeholder="usuario@mail.com"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-gray-300">Contraseña</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF6500] placeholder:text-gray-500"
              placeholder="••••••••"
              required
            />
          </label>
          <button
            type="submit"
            className="mt-2 w-full py-3 rounded-lg bg-[#FF6500] text-black font-semibold hover:bg-white transition-colors"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </main>
  );
}
