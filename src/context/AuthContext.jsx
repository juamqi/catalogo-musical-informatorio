import { createContext, useContext, useMemo, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { clearFavorites } from "../utils/favorites";

const AUTH_STORAGE_KEY = "auth";

function readStoredAuth() {
  if (typeof window === "undefined") {
    return { isAuthenticated: false, user: null };
  }
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return { isAuthenticated: false, user: null };
    const parsed = JSON.parse(raw);
    if (parsed?.isAuthenticated) {
      return { isAuthenticated: true, user: parsed.user || null };
    }
    return { isAuthenticated: false, user: null };
  } catch (error) {
    console.error("No se pudo leer el estado de auth", error);
    return { isAuthenticated: false, user: null };
  }
}

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const queryClient = useQueryClient();
  const [{ isAuthenticated, user }, setAuthState] = useState(() => readStoredAuth());

  const login = (credentials) => {
    const nextUser = { name: credentials?.email || "Usuario" };
    const nextState = { isAuthenticated: true, user: nextUser };
    setAuthState(nextState);
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(nextState));
  };

  const logout = () => {
    setAuthState({ isAuthenticated: false, user: null });
    localStorage.removeItem(AUTH_STORAGE_KEY);
    clearFavorites();
    queryClient.removeQueries({ queryKey: ["albums"], exact: false });
    queryClient.removeQueries({ queryKey: ["featured-albums"], exact: false });
  };

  const value = useMemo(
    () => ({
      isAuthenticated,
      user,
      login,
      logout,
    }),
    [isAuthenticated, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
}
