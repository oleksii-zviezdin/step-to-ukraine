import React from 'react'
import { GoShareAndroid } from 'react-icons/go'
import { FiHeart } from 'react-icons/fi'
import { CiStar } from 'react-icons/ci'
import { GrLocation } from 'react-icons/gr'
import Button from '../Button/Button'

import styles from './Card.module.scss'

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}></div>
      <div className={styles.card_block}>
        <div className={styles.card_info}>
          <div className={styles.card_rating}>
            <FiHeart className={styles.icon} size={32} />
            <GoShareAndroid className={styles.icon} size={32} />
            <span>Відгуки</span>
            <CiStar className={styles.icon} size={32} />
          </div>
          <div className={styles.card_title}>
            назва
            <p>детальна назва</p>
          </div>
          <div className={styles.card_location}>
            <GrLocation className={styles.icon} size={32} />
            <span>м. Чернівці</span>
          </div>
        </div>
        <Button
          label="На локацію"
          onClick={() => console.log('клік')}
          additionalClassName={styles.button_default}
        />
      </div>
    </div>
  )
}

export default Card
