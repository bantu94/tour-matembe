import React from 'react'
import Title from './Title'
import * as styles from '../css/about.module.css';
import img from '../images/about.jpg';

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="Matembe" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
          </div>
        </article>

        <article className={styles.aboutInfo}>
          <h4>The abode of bygone ruins</h4>
          <p>
            Hampi, the city of ruins, is a UNESCO World Heritage Site.
            Situated in the shadowed depth of hills and valleys in the state
            of Karnataka, this place is a historical delight for travellers.
          </p>
          <p>
            Surrounded by 500 ancient monuments, beautiful temples, bustling
            street markets, bastions, treasury building and captivating
            remains of Vijayanagar Empire, Hampi is a backpacker's delight.
          </p>
          <a href="https://en.wikipedia.org/wiki/Hampi" className="btn-primary"
          target="_blank" rel="noopener noreferrer">
            read more
          </a>
        </article>
      </div>
    </section>
  )
}

export default About