import { ScrollScene, UseCanvas, styles } from '@14islands/r3f-scroll-rig'
import { useImageAsTexture } from '@14islands/r3f-scroll-rig'
import { MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'

export const ImageWrapper = ({src}) => {
	
	const image = useRef()

	return (
		<>
			<img
				ref={image}
				src={src}
				alt="image"
				className={`${styles.hiddenWhenSmooth} w-full h-full object-cover`}
			/>
			<UseCanvas>
				<ScrollScene track={image}>
					{(props) => (
						<WebGLImage imgRef={image} {...props} />
					)}
				</ScrollScene>
			</UseCanvas>
		</>
	)
}

function WebGLImage({ imgRef, ...props }) {
	// Load texture from the <img/> and suspend until its ready
	const texture = useImageAsTexture(imgRef)

	return (
		<mesh {...props}>
			<planeGeometry args={[1, 1, 16, 16]} />
			<MeshDistortMaterial transparent map={texture} radius={0.99} distort={0.2} speed={3} />
		</mesh>
	)
  }