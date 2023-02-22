import React from 'react'
import Title from './Title';
import tips from '../constants/tips';
import * as styles from '../css/tips.module.css';

const Tips = () => {
  return (
    <section className={styles.tips}>
      <Title title="hot" subtitle="tips" />
      <div className={styles.center}>
        {tips.map((item, index) => {
          return (
            <article key={index} className={styles.tip}>
              <span className={styles.icon}>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Tips