import { Children } from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import styles from './banner.module.css'

export default function Banner({ children }) {
  return (
    <>
    <Jumbotron fluid className={styles.banner}>
    <Container className={styles.bannerText}>
      <div>
        <h1 className={styles.title}>{children}</h1>
      </div>
    </Container>
    </Jumbotron>
    </>
  )
}
