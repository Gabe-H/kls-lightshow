import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from './navbar.module.css'
import { Navbar, Nav } from 'react-bootstrap'

export default function NavBar() {
  const [ session, loading ] = useSession()
  const router = useRouter()

  function mySignOut() {
    signOut()
    window.location.reload()
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>Knight Light Show</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav activeKey={router.pathname} className="mr-auto">
          <Link href='/' passHref>
            <Nav.Link>Home</Nav.Link>
          </Link>
          {/* <Link href='/about' passHref>
            <Nav.Link>About</Nav.Link>
          </Link> */}
          <Link href='/visit' passHref>
            <Nav.Link>Visit</Nav.Link>
          </Link>
          <Link href='/photos' passHref>
            <Nav.Link>Photos</Nav.Link>
          </Link>
        </Nav>
        <Nav>
          {/* <Nav.Item className={styles.donateButton}>
          <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="ZARCGZD2X7ERE" />
            <input type="hidden" name="item_name" value="To help the Knight Lights continue to bring you light shows each year!" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
          </Nav.Item> */}
          {!session && (
          <>
          <Nav.Link onClick={signIn}>Sign in</Nav.Link>
          </>
        )}
        {session && (
          <>
          <Nav.Link onClick={mySignOut}>Sign out</Nav.Link>
          <Nav.Item className={styles.pfp}>
            <img
              src={session.user.image}
              alt={session.user.name}
              width={30}
              height={30}
              className={styles.img}
            /></Nav.Item>
          </>
        )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}