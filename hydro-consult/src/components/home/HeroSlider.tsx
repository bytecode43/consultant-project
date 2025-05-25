import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

export default function HeroSlider() {
  const slides = [
    { src: 'https://picsum.photos/800/600?random=1', caption: 'Solu Khola (86 MW)' },
    { src: 'https://picsum.photos/800/600?random=2', caption: 'Another Project' },
    { src: 'https://picsum.photos/800/600?random=3', caption: 'Yet Another Project' },
  ]

  return (
    <Swiper pagination loop className="w-full h-[60vh]">
      {slides.map(({ src, caption }, i) => (
        <SwiperSlide key={i}>
          <div className="relative w-full h-[60vh]">
            <img
              src={src}
              alt={caption}
              className="object-cover w-full h-full"
            />
            <h2 className="absolute bottom-8 left-8 text-white text-3xl drop-shadow">
              {caption}
            </h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
