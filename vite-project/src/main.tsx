import * as THREE from 'three';
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame } from '@react-three/fiber';
import { getProject } from '@theatre/core';
import studio from '@theatre/studio';
import extension from '@theatre/r3f/dist/extension';
import { editable as e, SheetProvider } from '@theatre/r3f';

// our Theatre.js project sheet, we'll use this later
const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

const App = () => {
  studio.initialize();
  studio.extend(extension);

  return (
    <Canvas camera={{ position: [5, 5, -5] }}>
  <SheetProvider sheet={demoSheet}>
    <ambientLight />
    <e.pointLight theatreKey="Light" position={[10, 10, 10]} />
    <e.mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </e.mesh>
  </SheetProvider>
</Canvas>
  )
}

createRoot(document.getElementById('root')!).render(<App />)