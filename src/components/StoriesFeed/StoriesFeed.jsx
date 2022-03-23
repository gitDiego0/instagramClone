import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import styles from './styles.module.css'

import StorieObject from '../StorieObject/StorieObject'

export default function StoriesFeed() {
  const onSlideChange = () => {
    return console.log('slide')
  }
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        className={styles.carousel}
        onSlideChange={onSlideChange}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <StorieObject />
        </SwiperSlide>
        <SwiperSlide>
          <StorieObject />
        </SwiperSlide>
        <SwiperSlide>
          <StorieObject />
        </SwiperSlide>
        <SwiperSlide>
          <StorieObject />
        </SwiperSlide>
        <SwiperSlide>
          <StorieObject />
        </SwiperSlide>
        <SwiperSlide>
          <StorieObject />
        </SwiperSlide>
        <SwiperSlide>
          <StorieObject />
        </SwiperSlide>
        <SwiperSlide>
          <StorieObject />
        </SwiperSlide>
        <SwiperSlide>
          <StorieObject />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
