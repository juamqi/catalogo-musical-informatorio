import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function MusicParticles() {
  const particlesInit = useCallback(async (engine) => { await loadSlim(engine);}, []);
  
  return (
    <Particles id="tsparticles" init={particlesInit} className="absolute inset-0 -z-10" options={{ background: { color: "transparent" }, fullScreen: false, particles: { number: { value: 50 }, move: { enable: true, speed: 2.5, direction: "top", outModes: { default: "out" }, }, opacity: { value: 0.4 }, size: { value: 16 }, shape: { type: "char", character: [{ value: "♫", font: "Verdana", weight: "400" }, { value: "♪", font: "Verdana", weight: "400" },], }, color: { value: "#EDF252" }, }, }} />
  );
}