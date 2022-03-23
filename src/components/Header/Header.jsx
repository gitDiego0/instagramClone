import React from 'react'

import Camera from '../Icons/Camera'
import Messages from '../Icons/Messages'

import styles from './styles.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_camera}>
        <button>
          <Camera />
        </button>
      </div>
      <div className={styles.header_logo}>
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
      </div>
      <div className={styles.header_messages}>
        <button>
          <Messages />
        </button>
      </div>
    </header>
  )
}
