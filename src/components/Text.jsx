import { ScrollScene, UseCanvas, styles } from '@14islands/r3f-scroll-rig'
import { WebGLText } from '@14islands/r3f-scroll-rig/powerups'
import { MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'

export function Text({ children, as: Tag = 'span' }) {

  const text = useRef()

  return (
    <>
      {/* 
        This is the real DOM text that we want to replace with WebGL   
      */}
      <Tag ref={text} className={styles.transparentColorWhenSmooth}>
        {children}
      </Tag>

      <UseCanvas>
        <ScrollScene track={text}>
          {(props) => (
            // WebGLText uses getComputedStyle() to calculate font size,
            // letter spacing, line height, color and text align
            <WebGLText
              el={text} // getComputedStyle is called on this element
              font='/fonts/codec-pro-regular.woff' // path to the typeface (*.woff)
              glyphGeometryDetail={16} // needed for distortion to look good
              {...props} // contains scale from the ScrollScene
              >
                <MeshDistortMaterial speed={1.4} distort={0.14} />
                {children}
              </WebGLText>
            )}
          </ScrollScene>
        </UseCanvas>
    </>
  )
}