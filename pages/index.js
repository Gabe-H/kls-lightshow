import { Container } from 'react-bootstrap'
import { useSession } from 'next-auth/client'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'
// import checkEmail from '../components/CheckEmail'
import Donate from '../components/Donate'
import Banner from '../components/Banner'

export default function Home() {

  const [session, loading] = useSession()

  return (
    <>
    <Banner>Welcome to the Knight Lights!</Banner>
    <Container>
      This is the website of the light show on Knight Dr in Benicia, CA.
      <br/><br/><br/>
      Check out the <Link href='/visit' passHref><a><b>Visit</b></a></Link> page for more info!
      <br/><br/>
      WEBSITE IS STILL A WORK IN PROGRESS
      <br/>
      <Donate/>
    </Container>
    </>
  )
}