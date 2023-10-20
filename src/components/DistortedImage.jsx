import { useRef } from "react"
import { GradientTexture, Image, MeshDistortMaterial } from "@react-three/drei"
import { UseCanvas, ScrollScene } from '@14islands/r3f-scroll-rig' 


export const DistortedImage = () => {

	const wrapper = useRef()
	
	const texture = useImageAsTexture(imgRef)

	return (
		<>
			<div ref={wrapper} className="w-full h-full flex flex-row items-center justify-center"></div>
			<UseCanvas>
			<ScrollScene track={wrapper}>
				{(props) => (
				<mesh {...props}>
					<planeGeometry args={[1, 1, 16, 16]} />
					<MeshDistortMaterial speed={5} distort={0.2} map={texture}>
						<GradientTexture
							stops={[0, 1]} // As many stops as you want
							colors={['#FFFF00', '#2EE68E']} // Colors need to match the number of stops
							rotation={0.75}
						/>
						{/* <Image ref={ref} url="/gameboy.jpg" /> */}
					</MeshDistortMaterial>
				</mesh>
				)}
			</ScrollScene>
			</UseCanvas>
		</>
	)
}
