import { Provider } from 'next-auth/client'
import Head from 'next/head'
import NavBar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <title>Knight Light Show</title>
        <link rel="icon" href="/knight.svg" />
      </Head>
      <NavBar/>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
