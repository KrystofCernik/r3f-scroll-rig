import { useRef, Suspense } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Image } from "@react-three/drei";

export function Background() {

  const bg = useRef()

  const viewport = useThree((s) => s.viewport)

  useFrame((_, delta) => {
    if (bg.current) bg.current.rotation.z -= delta * 0.1
  })

  return (
      <Suspense fallback="">
        <Image
          ref={bg}
          scale={Math.max(viewport.width, viewport.height) * 1.2}
          url="mask1.png"
          zoom={1}
          transparent
          renderOrder={-1}
        />
      </Suspense>
  );
}
