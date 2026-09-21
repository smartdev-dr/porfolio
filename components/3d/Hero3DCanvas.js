"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    // Renderer
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn("WebGL not available or error initializing Three.js:", e);
      return;
    }

    // Group for all rotating objects
    const group = new THREE.Group();
    scene.add(group);

    // Brand Colors: #ff4522, #ff7043, #ff344f
    const primaryColor = 0xff4522;
    const glowColor = 0xff6242;
    const accentColor = 0xffffff;

    // 1. Central Core - Geometric Icosahedron with Wireframe + Inner Glow
    const coreGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x120804,
      emissive: primaryColor,
      emissiveIntensity: 0.35,
      metalness: 0.9,
      roughness: 0.1,
      transmission: 0.6,
      thickness: 1.2,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Outer Wireframe Lattice
    const wireGeo = new THREE.IcosahedronGeometry(1.45, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    group.add(wireMesh);

    // Inner Glowing Core Sphere
    const innerGeo = new THREE.SphereGeometry(0.7, 24, 24);
    const innerMat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      transparent: true,
      opacity: 0.8,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerSphere);

    // 2. Orbital Rings with Dash/Segments
    const createRing = (radius, tubeRadius, rotationX, rotationY, color) => {
      const ringGeo = new THREE.TorusGeometry(radius, tubeRadius, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.7,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = rotationX;
      ring.rotation.y = rotationY;
      return ring;
    };

    const ring1 = createRing(2.1, 0.015, Math.PI / 3, Math.PI / 6, glowColor);
    const ring2 = createRing(2.5, 0.012, -Math.PI / 4, Math.PI / 4, primaryColor);
    const ring3 = createRing(2.8, 0.01, Math.PI / 2, 0, 0x555555);
    group.add(ring1);
    group.add(ring2);
    group.add(ring3);

    // 3. Orbiting Data Satellite Cubes
    const satellites = [];
    const satCount = 6;
    for (let i = 0; i < satCount; i++) {
      const satGeo = new THREE.BoxGeometry(0.12, 0.12, 0.12);
      const satMat = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? primaryColor : accentColor,
        emissive: primaryColor,
        emissiveIntensity: 0.8,
      });
      const sat = new THREE.Mesh(satGeo, satMat);
      const angle = (i / satCount) * Math.PI * 2;
      const radius = 2.1;
      sat.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
      sat.userData = { angle, speed: 0.015 + i * 0.003, radius };
      group.add(sat);
      satellites.push(sat);
    }

    // 4. Volumetric Particle Cloud / Cyber Constellation
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(primaryColor);
    const c2 = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const r = 2.5 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const color = Math.random() > 0.4 ? c1 : c2;
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(primaryColor, 3, 20);
    pointLight.position.set(3, 4, 3);
    scene.add(pointLight);

    const backLight = new THREE.PointLight(0xff344f, 2, 20);
    backLight.position.set(-3, -3, -2);
    scene.add(backLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.5;
      targetY = y * 1.5;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera/group rotation towards mouse
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      group.rotation.y = elapsedTime * 0.25 + mouseX;
      group.rotation.x = Math.sin(elapsedTime * 0.2) * 0.15 + mouseY;

      // Inner Core Pulse
      const scale = 1 + Math.sin(elapsedTime * 2) * 0.05;
      innerSphere.scale.set(scale, scale, scale);
      coreMesh.rotation.y += 0.005;
      coreMesh.rotation.z += 0.003;

      // Rings counter-rotation
      ring1.rotation.z += 0.006;
      ring2.rotation.z -= 0.008;
      ring3.rotation.y += 0.004;

      // Orbiting Satellites
      satellites.forEach((sat) => {
        sat.userData.angle += sat.userData.speed;
        sat.position.x = Math.cos(sat.userData.angle) * sat.userData.radius;
        sat.position.z = Math.sin(sat.userData.angle) * sat.userData.radius;
        sat.position.y = Math.sin(sat.userData.angle * 2) * 0.4;
        sat.rotation.x += 0.02;
        sat.rotation.y += 0.02;
      });

      // Particles slow drift
      particles.rotation.y = -elapsedTime * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[380px] md:min-h-[500px] flex items-center justify-center relative cursor-grab active:cursor-grabbing select-none"
      style={{ touchAction: "none" }}
    />
  );
}
