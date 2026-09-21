"use client";
import React, { useEffect, useRef } from "react";

export default function Background3DGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle nodes
    const particleCount = Math.floor((width * height) / 18000);
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 800 + 200,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 0.8,
        color: Math.random() > 0.4 ? "255, 69, 34" : "255, 255, 255",
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    let animationId;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw perspective grid at the bottom
      const horizonY = height * 0.72;
      const fov = 350;

      // Draw subtle grid lines
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "rgba(255, 69, 34, 0.04)";

      for (let x = -width; x < width * 2; x += 90) {
        ctx.beginPath();
        ctx.moveTo(x + (mouseX - width / 2) * 0.05, height);
        ctx.lineTo(width / 2 + (x - width / 2) * 0.1, horizonY);
        ctx.stroke();
      }

      // Draw particles in 3D projection
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Interaction with mouse distance
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let alpha = 0.25;
        if (dist < 180) {
          alpha = 0.7 * (1 - dist / 180);
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${alpha})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
