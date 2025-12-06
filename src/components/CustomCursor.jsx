import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!dot || !outline || !hasFinePointer || prefersReducedMotion) {
      return undefined;
    }

    document.body.classList.add("custom-cursor-enabled");

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    let frameId;
    let cursorVisible = false;

    const handleMove = (event) => {
      if (!cursorVisible) {
        document.body.classList.add("custom-cursor-visible");
        cursorVisible = true;
      }
      mouseX = event.clientX;
      mouseY = event.clientY;
      const dotHalf = dot.offsetWidth / 2;
      dot.style.transform = `translate3d(${mouseX - dotHalf}px, ${mouseY - dotHalf}px, 0)`;
    };

    const animate = () => {
      outlineX += (mouseX - outlineX) * 0.30;
      outlineY += (mouseY - outlineY) * 0.30;
      const outlineHalf = outline.offsetWidth / 2;
      outline.style.transform = `translate3d(${outlineX - outlineHalf}px, ${outlineY - outlineHalf}px, 0)`;
      frameId = requestAnimationFrame(animate);
    };

    const hoverSelector = "a, button, .cursor-link";
    const toggleLinkHover = (active) => {
      document.body.classList.toggle("cursor-link-active", active);
      if (active) {
        dot.style.opacity = "0";
      } else if (document.body.classList.contains("custom-cursor-visible")) {
        dot.style.opacity = "";
      }
    };

    const handlePointerOver = (event) => {
      if (event.target.closest(hoverSelector)) {
        toggleLinkHover(true);
      }
    };

    const handlePointerOut = (event) => {
      const isLeavingTarget = event.target.closest(hoverSelector);
      const stillInsideTarget = event.relatedTarget?.closest(hoverSelector);
      if (isLeavingTarget && !stillInsideTarget) {
        toggleLinkHover(false);
      }
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);
    frameId = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      document.body.classList.remove("custom-cursor-visible");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      toggleLinkHover(false);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-outline" ref={outlineRef} aria-hidden="true" />
    </>
  );
}
