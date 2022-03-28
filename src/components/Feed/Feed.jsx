import React from 'react'
import Publication from '../Publication/Publication'
import styles from './styles.module.css'

export default function Feed() {
  const publications = [
    {
      username: 'Juan',
      imgSrc: 'https://picsum.photos/200/100',
      imgUserSrc: 'https://picsum.photos/200/300',
    },
    {
      username: 'Paco',
      imgSrc: 'https://picsum.photos/200/400',
      imgUserSrc: 'https://picsum.photos/200/300',
    },
    {
      username: 'Jesus',
      imgSrc: 'https://picsum.photos/200/300',
      imgUserSrc: 'https://picsum.photos/200/300',
    },
  ]

  return (
    <div>
      {publications.map((publication, index) => {
        return <Publication key={index} {...publication} />
      })}
    </div>
  )
}
