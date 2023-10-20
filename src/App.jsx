import { GlobalCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig'

// Styles
import './app.css'
import '@14islands/r3f-scroll-rig/css'
import { ImageWrapper } from './components/Image'
import { Text } from './components/Text'
import { DistortedImage } from './components/DistortedImage'

function App() {

  return (
    <>
      <GlobalCanvas>
        <ambientLight />
      </GlobalCanvas>

      <SmoothScrollbar>
        {(bind) => (
        <div className='page w-full h-auto' {...bind}>
          
          <section className='w-full h-screen bg-white'>
            <div className='w-full h-full flex flex-row items-center justify-center'>
              <h1 className='text-[10rem] font-normal gradient-1'>WebGL</h1>
            </div>
          </section>

          <section className='w-full h-screen bg-white p-32'>
            <DistortedImage />
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
