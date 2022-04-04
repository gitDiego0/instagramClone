import React from 'react'
import HeartIcon from '../Icons/HeartIcon'
import Home from '../Icons/Home'
import PublishIcon from '../Icons/PublishIcon'
import SearchIcon from '../Icons/SearchIcon'
import styles from './styles.module.css'

export default function Footer({ setUser, isloggedin }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.iconContainer}>
        <a href="/">
          <div className={styles.iconWrapper}>
            <Home />
          </div>
        </a>
        <a href="#">
          <div className={styles.iconWrapper}>
            <SearchIcon />
          </div>
        </a>
        <a>
          <div className={styles.iconWrapper}>
            <PublishIcon />
          </div>
        </a>
        <a>
          <div className={styles.iconWrapper}>
            <HeartIcon />
          </div>
        </a>
        <a>
          <div className={styles.iconWrapper}>
            <span className={styles.icon}></span>
          </div>
        </a>
      </div>
    </footer>
  )
}
