import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface NeuralLatticeProps {
  scrollProgress: number;
}

export default function NeuralLattice({ scrollProgress }: NeuralLatticeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    nodes: THREE.Points;
    edges: THREE.LineSegments;
    clock: THREE.Clock;
    grid: THREE.GridHelper;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x040810, 5, 25);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance' 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // --- Geometry: Nodes & Edges ---
    // Sample coordinates for a "lattice" (a stylized M shape for Machuni)
    const nodeCount = window.innerWidth < 768 ? 60 : 100;
    const positions = new Float32Array(nodeCount * 3);
    const colors = new Float32Array(nodeCount * 3);
    const sizes = new Float32Array(nodeCount);

    for (let i = 0; i < nodeCount; i++) {
       // Create a stylized structure (abstract M-like lattice)
      const t = i / nodeCount;
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 4;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      colors[i * 3] = 1;
      colors[i * 3 + 1] = 1;
      colors[i * 3 + 2] = 1;
      
      sizes[i] = Math.random() * 0.1 + 0.05;
    }

    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    nodeGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    nodeGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const nodeMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const nodes = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodes);

    // Edges
    const linePairs: number[] = [];
    const maxDistance = 2.5;

    for(let i = 0; i < nodeCount; i++) {
        const v1 = new THREE.Vector3(positions[i*3], positions[i*3+1], positions[i*3+2]);
        let connections = 0;
        for(let j = i + 1; j < nodeCount && connections < 3; j++) {
            const v2 = new THREE.Vector3(positions[j*3], positions[j*3+1], positions[j*3+2]);
            if(v1.distanceTo(v2) < maxDistance) {
                linePairs.push(positions[i*3], positions[i*3+1], positions[i*3+2]);
                linePairs.push(positions[j*3], positions[j*3+1], positions[j*3+2]);
                connections++;
            }
        }
    }

    const edgeGeometry = new THREE.BufferGeometry();
    edgeGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePairs), 3));
    const edgeMaterial = new THREE.LineBasicMaterial({ 
        color: 0x00d1ff, 
        transparent: true, 
        opacity: 0.2,
        blending: THREE.AdditiveBlending
    });
    const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial);
    scene.add(edges);

    // Grid Floor
    const grid = new THREE.GridHelper(40, 40, 0x00d1ff, 0x040810);
    grid.position.y = -6;
    grid.material.transparent = true;
    grid.material.opacity = 0.1;
    scene.add(grid);

    // Initial Camera
    camera.position.z = 12;

    const clock = new THREE.Clock();
    sceneRef.current = { scene, camera, renderer, nodes, edges, clock, grid };

    // Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Subtle rotation
      nodes.rotation.y = time * 0.05;
      edges.rotation.y = time * 0.05;
      
      // Node "Breathing"
      const posAttr = nodeGeometry.attributes.position as THREE.BufferAttribute;
      for(let i = 0; i < nodeCount; i++) {
          const v = Math.sin(time + i * 0.1) * 0.005;
          posAttr.array[i * 3 + 1] += v;
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update Camera based on Scroll
  useEffect(() => {
    if (!sceneRef.current) return;
    const { camera } = sceneRef.current;

    // Camera Flight Path
    // Keyframes loosely following the 7 sections
    const zBase = 12;
    const yBase = 0;
    
    // Smooth interpolation
    camera.position.z = zBase - (scrollProgress * 8); // Zoom in
    camera.position.y = yBase + (scrollProgress * 4); // Fly up
    camera.rotation.x = -scrollProgress * 0.5; // Look down
    camera.position.x = Math.sin(scrollProgress * Math.PI) * 2; // Swerve

  }, [scrollProgress]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 pointer-events-none" 
      style={{ background: 'radial-gradient(circle at center, #0a0e18 0%, #040810 100%)' }}
    />
  );
}
