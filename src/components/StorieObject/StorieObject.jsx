import React from 'react'

import styles from './styles.module.css'

export default function StorieObject() {
  return (
    <div className={styles.storieContainer}>
      <button className={styles.storie}>
        <span className={styles.imageContainer}>
          <img src="https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_960_720.jpg" />
        </span>
        <span className={styles.username}>Username</span>
      </button>
    </div>
  )
}
