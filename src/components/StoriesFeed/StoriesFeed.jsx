import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import styles from './styles.module.css'

import StorieObject from '../StorieObject/StorieObject'

export default function StoriesFeed() {
  const stories = [
    {
      imgSrc: 'https://picsum.photos/id/1/200/200',
      username: 'Juan',
    },
    {
      imgSrc: 'https://picsum.photos/id/2/200/200',
      username: 'Paco',
    },
    {
      imgSrc: 'https://picsum.photos/id/3/200/200',
      username: 'Jesus',
    },
    {
      imgSrc: 'https://picsum.photos/id/4/200/200',
      username: 'Diego',
    },
    {
      imgSrc: 'https://picsum.photos/id/5/200/200',
      username: 'Pedro',
    },
    {
      imgSrc: 'https://picsum.photos/id/6/200/200',
      username: 'Hulio',
    },
    {
      imgSrc: 'https://picsum.photos/id/7/200/200',
      username: 'Carmen',
    },
    {
      imgSrc: 'https://picsum.photos/id/8/200/200',
      username: 'Susana',
    },
    {
      imgSrc: 'https://picsum.photos/id/9/200/200',
      username: 'Maria',
    },
    {
      imgSrc: 'https://picsum.photos/id/10/200/200',
      username: 'Marta',
    },
  ]

  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        className={styles.carousel}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {stories.map((story, index) => (
          <SwiperSlide key={index}>
            <StorieObject {...story} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
