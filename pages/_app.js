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
      <head>
      <script
          dangerouslySetInnerHTML={{
            __html: `
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-TFQ2W87T8G"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-TFQ2W87T8G');
            </script>
              `,
          }}
        />
      </head>
      <NavBar/>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
