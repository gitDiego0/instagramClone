import React from 'react'
import HeartIcon from '../Icons/HeartIcon'
import CommentIcon from '../Icons/CommentIcon'
import Messages from '../Icons/Messages'
import styles from './styles.module.css'

export default function Publication({ username, imgSrc, imgUserSrc }) {
  return (
    <div className={styles.publicationContainer}>
      <header className={styles.publicationHeader}>
        <div className={styles.iconWrapper}>
          <img src={imgUserSrc} alt={username} className={styles.icon} />
        </div>
        <div>
          <span>{username}</span>
        </div>
      </header>
      <div className={styles.imageWrapper}>
        <img src={imgSrc} className={styles.image} />
      </div>
      <div className={styles.actionsWrapper}>
        <span>
          <button>
            <HeartIcon />
          </button>
        </span>
        <span>
          <button>
            <CommentIcon />
          </button>
        </span>
        <span>
          <button>
            <Messages />
          </button>
        </span>
      </div>
    </div>
  )
}
