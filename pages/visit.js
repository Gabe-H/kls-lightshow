import { Container } from 'react-bootstrap'
import Banner from '../components/Banner'
import styles from '../styles/Visit.module.css'

export default function visit() {
  return (
    <>
      <Banner>How to watch the Knight Lights</Banner>
      <Container>
        <p>
          The light show is located on Knight Dr in Benicia, CA (Google Maps below).
          <br/>
          When you arrive, please tune your radio to <b>87.9 FM</b>.
          <br/>
          It is also requested that you turn off your lights to leave the show enjoyable for everyone.
          <br/><br/>
          Enjoy!
        </p>
        <div className={styles.aspectratio}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d907.0573152243711!2d-122.17873655512132!3d38.085165720735866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808573e353676697%3A0xb624d3f33312b6a2!2sKnight%20Lights%20Light%20Show!5e0!3m2!1sen!2sus!4v1608700531991!5m2!1sen!2sus" 
            frameborder="0" 
            allowfullscreen="" 
            aria-hidden="false" 
            tabindex="0"
            className={styles.map}
          />
        </div>
      </Container>
    </>
  )
}