import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function RippleProvider({
  children,
  rippleColor = "rgba(202, 202, 202, 0.8)",
  duration = 1.5,
  scale = 12,
}) {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest("[data-ripple]");
      if (!target) return;

      // Make sure the button/container has relative position
      if (getComputedStyle(target).position === "static") {
        target.style.position = "relative";
      }
      target.style.overflow = "hidden";

      const rect = target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const key = Date.now();
      setRipples((prev) => [
        ...prev,
        { key, target, x, y, size },
      ]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.key !== key));
      }, duration * 1000);
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [duration]);

  return (
    <>
      {children}
      {ripples.map((ripple) =>
        createPortal(
          <AnimatePresence key={ripple.key}>
            <motion.span
              style={{
                position: "absolute",
                left: ripple.x,
                top: ripple.y,
                width: ripple.size,
                height: ripple.size,
                backgroundColor: rippleColor,
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 9999,
              }}
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: scale, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration, ease: "easeInOut" }}
            />
          </AnimatePresence>,
          ripple.target
        )
      )}
    </>
  );
}
