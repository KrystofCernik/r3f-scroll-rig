import { GlobalCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig'

// Styles
import './app.css'
import '@14islands/r3f-scroll-rig/css'
import { ImageWrapper } from './components/Image'
import { Text } from './components/Text'
import { DistortedImage } from './components/DistortedImage'
import { Lens } from './components/Lens'
import { Suspense } from 'react'
import { Environment } from '@react-three/drei'
import { Background } from './components/Background'

function App() {

  return (
    <>
      <GlobalCanvas
         flat
         camera={{ fov: 14 }}
         
      >
        {(globalChildren) => (
            <>
              <Lens>
                <Suspense fallback="">
                  <Background />
                  <Environment files="env/empty_warehouse_01_1k.hdr" />
                  {globalChildren}
                </Suspense>
              </Lens>
              {/* <ambientLight /> */}
            </>
        )}
      </GlobalCanvas>

      <SmoothScrollbar>
        {(bind) => (
        <div className='page w-full h-auto bg-white' {...bind}>
          
          <section className='w-full h-screen bg-white'>
            <div className='w-full h-full flex flex-row items-center justify-center'>
              <h1 className='text-[10rem] font-normal gradient-1'>WebGL</h1>
            </div>
          </section>

          <section className='w-full h-screen bg-white p-32'>
            <ImageWrapper src={'/gameboy.jpg'} />
          </section>

          {/* <section className='relative w-full h-screen bg-white'>

            <div className='absolute inset-0'>
              <img
                src="/mask1.png"
                alt="gradient"
                className='w-full h-full object-cover'
              />
            </div>

            <div className='relative z-[1] w-full h-full flex flex-row items-center justify-center'>
              <h1 className='text-[10rem] font-normal'>Responsive</h1>
            </div>

          </section> */}

          <section className='w-full h-screen bg-white'>
            <div className='w-full h-full flex flex-row items-center justify-center'>
              <h1 className='text-[10rem] font-normal gradient-2'>Interactive</h1>
            </div>
          </section>

          <Text>
            Hello world
          </Text>

          {/* <section className='relative w-full h-screen bg-white'>

            <div className='absolute inset-0'>
              <img
                src="/mask2.png"
                alt="gradient"
                className='w-full h-full object-cover'
              />
            </div>

            <div className='relative z-[1] w-full h-full flex flex-row items-center justify-center'>
              <h1 className='text-[10rem] font-normal text-white'>Layout</h1>
            </div>

          </section> */}

        </div>
        )}
      </SmoothScrollbar>
    </>
  )
}

export default App
