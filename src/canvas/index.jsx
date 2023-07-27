import { Canvas } from '@react-three/fiber'
import { Center } from '@react-three/drei';
import Shirt from './Shirt';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />

      <CameraRig>
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel