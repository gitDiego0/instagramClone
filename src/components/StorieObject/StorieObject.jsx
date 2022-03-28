import React from 'react'

import styles from './styles.module.css'

export default function StorieObject({ imgSrc, username }) {
  return (
    <div className={styles.storieContainer}>
      <button className={styles.storie}>
        <span className={styles.imageContainer}>
          <img src={imgSrc} alt={username} />
        </span>
        <span className={styles.username}>{username}</span>
      </button>
    </div>
  )
}
