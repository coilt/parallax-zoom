'use client';
import dynamic from 'next/dynamic';
import styles from './styles.module.scss';
import { useRef, useState, useEffect } from 'react';
import { Canvas, createPortal, useFrame, useThree, } from '@react-three/fiber';
import * as THREE from 'three';
import {
  useFBO,
  useGLTF,
  useScroll,
 
   
  Scroll,
  Preload,
  ScrollControls,
  MeshTransmissionMaterial,
} from '@react-three/drei';
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

 

import { easing } from 'maath';
 
export default function LensComponent() {
  return (
    <Canvas className={styles.lens}
   gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true   }}
    camera={{ 
    position: [0, 0, 20], fov: 15 }} 
    style={{
      background: 'transparent',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 1 // Ensure it's above most content but adjust based on your needs
    }} >
      <ScrollControls damping={0.2} pages={3} distance={0.5}>
        <Lens>
          <Scroll>
             
            
          </Scroll>
          <Scroll html>
            
          </Scroll>
          {/** This is a helper that pre-emptively makes threejs aware of all geometries, textures etc
                 By default threejs will only process objects if they are "seen" by the camera leading 
                 to jank as you scroll down. With <Preload> that's solved.  */}
          <Preload url={'/lens-transformed.glb'} />
        </Lens>
      </ScrollControls>
    </Canvas>
  )
}

function Lens({ children, damping = 0.15, ...props }) {
  const ref = useRef()
  const { nodes } = useGLTF('/lens-transformed.glb')
  const buffer = useFBO()
  const viewport = useThree((state) => state.viewport)
  const [scene] = useState(() => new THREE.Scene())

  

  useFrame((state, delta) => {
    // Tie lens to the pointer
    // getCurrentViewport gives us the width & height that would fill the screen in threejs units
    // By giving it a target coordinate we can offset these bounds, for instance width/height for a plane that
    // sits 15 units from 0/0/0 towards the camera (which is where the lens is)
    const viewport = state.viewport.getCurrentViewport(state.camera, [0, 0, 15])
    easing.damp3(
      ref.current.position,
      [(state.pointer.x * viewport.width) / 2, (state.pointer.y * viewport.height) / 2, 15],
      damping,
      delta
    )
    // This is entirely optional but spares us one extra render of the scene
    // The createPortal below will mount the children of <Lens> into the new THREE.Scene above
    // The following code will render that scene into a buffer, whose texture will then be fed into
    // a plane spanning the full screen and the lens transmission material
    state.gl.setRenderTarget(buffer)
    state.gl.setClearColor('alpha : Float')
    state.gl.render(scene, state.camera)
    state.gl.setRenderTarget(null)
  })
  return (
    <>
      {createPortal(children, scene)}
      <mesh scale={[viewport.width, viewport.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} />
      </mesh>
      <mesh scale={0.25} ref={ref} rotation-x={Math.PI / 2} geometry={nodes.Cylinder.geometry} {...props}>
        <MeshTransmissionMaterial buffer={buffer.texture} ior={1.2} thickness={1.5} anisotropy={0.1} chromaticAberration={0.04} />
      </mesh>
    </>
  )
}



function Typography() {
  const state = useThree()
  const { width, height } = state.viewport.getCurrentViewport(state.camera, [0, 0, 12])
  const shared = { font: '/Inter-Regular.woff', letterSpacing: -0.1, color: 'black' }
  return (
    <>
      <Text children="to" anchorX="left" position={[-width / 2.5, -height / 10, 12]} {...shared} />
      <Text children="be" anchorX="right" position={[width / 2.5, -height * 2, 12]} {...shared} />
      <Text children="home" position={[0, -height * 4.624, 12]} {...shared} />
    </>
  )
}
