import Image from 'next/image'
import Banner from '@/components/sections/home/banner'
import Pillars from '@/components/sections/home/pillars'
import SocialsFooter from '@/components/sections/home/socials-footer'

import { Button } from '@/components/ui/button'
import { Carousel, ImageData } from '@/components/ui/carousel'

const images: ImageData[] = [
  {
    title: 'Bowman Feild',
    url: '/images/photos/bowman.jpg',
  },
  {
    title: 'Gavin Electric',
    url: '/images/photos/gavin-electric.jpg',
  },
  {
    title: 'Bowman Feild2',
    url: '/images/photos/bowman.jpg',
  },
  {
    title: 'Gavin Electric2',
    url: '/images/photos/gavin-electric.jpg',
  },
  {
    title: 'Bowman Feild3',
    url: '/images/photos/bowman.jpg',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Banner />
      <div className="my-8 h-96 w-full flex items-center justify-center">
        <Carousel images={images} />
      </div>
      <div className="w-full bg-red-600 mt-8 py-8 md:py-16 px-4 flex flex-col items-center justify-center">
        <h3 className="text-white text-2xl md:text-5xl font-bold tracking-wider mb-4 text-center">
          Want to Join the Brotherhood?
        </h3>
        <p className="text-white text-lg md:text-2xl font-light tracking-wide mb-4 text-center">
          Check out our Rush section for more information
        </p>
        <Button variant={'outline'}>Rush Information</Button>
      </div>
      <Pillars />
      <SocialsFooter />
    </div>
  )
}
