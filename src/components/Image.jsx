import { ScrollScene, UseCanvas, styles } from '@14islands/r3f-scroll-rig'
import { useImageAsTexture } from '@14islands/r3f-scroll-rig'
import { Image } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { clamp } from 'three/src/math/MathUtils'

export const ImageWrapper = ({src}) => {
	
	const image = useRef()

	return (
		<>
			<img
				ref={image}
				src={src}
				alt="image"
				className={`${styles.hiddenWhenSmooth} web-gl-image`}
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

const WebGLImage = ({ imgRef, scrollState, dir, ...props }) => {
  const ref = useRef()

  // Load texture from the <img/> and suspend until it's ready
  const texture = useImageAsTexture(imgRef)

  useFrame(({ clock }) => {
    // visibility is 0 when image enters viewport and 1 when fully visible
    ref.current.material.grayscale = clamp(1 - scrollState.visibility ** 3, 0, 1)
    // progress is 0 when image enters viewport and 1 when image has exited
    ref.current.material.zoom = 1 + scrollState.progress * 0.66
    // viewport is 0 when image enters and 1 when image reach top of screen
    ref.current.material.opacity = clamp(scrollState.viewport * 3, 0, 1)
  })

  // Use the <Image/> component from Drei
  return <Image ref={ref} texture={texture} transparent {...props} />
}