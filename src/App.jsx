import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Cube = ({ position, size, color }) => {
  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta
    ref.current.position.z += Math.cos(state.clock.elapsedTime) * .03
    console.log(state.clock.elapsedTime)
  })
  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} wireframe/>
    </mesh>
  )
}

const App = () => {

  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={0.3} />
      <ambientLight intensity={0.4} />

      {/* <group position={[0, -1, 0]}>
        <Cube position={[-1, 1, 0]} color={'red'} />
        <Cube position={[1, 1, 0]} color={'pink'} />

        <Cube position={[-1, -1, 0]} color={'white'} />
        <Cube position={[1, -1, 0]} color={'blue'} size={[1, 1, 2]} />
      </group> */}
      <Cube position={[0, 0, 0]} size={[1, 1, 1]} color={'blue'} />
    </Canvas>
  )
}

export default App
