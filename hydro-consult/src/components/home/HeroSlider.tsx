import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function HeroSlider() {
  const slides = [
    { src: '/assets/slides/solu.jpg', caption: 'Solu Khola (86 MW)' },
    /* …other slides… */
  ]

  return (
    <Swiper pagination loop>
      {slides.map(({src, caption}, i) => (
        <SwiperSlide key={i}>
          <div className="relative h-[60vh]">
            <img src={src} className="object-cover w-full h-full" />
            <h2 className="absolute bottom-8 left-8 text-white text-3xl">{caption}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
