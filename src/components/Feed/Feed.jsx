import React from 'react'
import Publication from '../Publication/Publication'
import styles from './styles.module.css'

export default function Feed() {
  const publications = [
    {
      username: 'Juan',
      imgSrc: 'https://picsum.photos/200/100',
      imgUserSrc: 'https://picsum.photos/200/300',
      publishDate: '1 MINUTO',
      location: 'Bogotá, Colombia',
      likes: '10',
      description: 'Lorem ipsum dolor sit amet, consectetur adip',
    },
    {
      username: 'Paco',
      imgSrc: 'https://picsum.photos/200/400',
      imgUserSrc: 'https://picsum.photos/200/300',
      publishDate: '1 HORA',
      likes: '20',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      username: 'Jesus',
      imgSrc: 'https://picsum.photos/200/300',
      publishDate: '2 HORAS',
      likes: '30',
      imgUserSrc: 'https://picsum.photos/200/300',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
