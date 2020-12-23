import { Container } from 'react-bootstrap'
import { useSession } from 'next-auth/client'
import styles from '../styles/home.module.css'
import checkEmail from '../components/CheckEmail'
import Banner from '../components/Banner'

export default function Home() {

  const [session, loading] = useSession()

  return (
    <>
    <Banner>Welcome to the Knight Lights!</Banner>
    <Container>
      This is the website of the light show on Knight Dr in Benicia, CA.
      <br/><br/><br/>
      WEBSITE IS STILL A WORK IN PROGRESS
      <br/><br/><br/>
      If you'd like to help support the light show, please feel free to donate securely using the PayPal button below!
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="cmd" value="_donations" />
        <input type="hidden" name="business" value="ZARCGZD2X7ERE" />
        <input type="hidden" name="item_name" value="To help the Knight Lights continue to bring you light shows each year!" />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </Container>
    </>
  )
}