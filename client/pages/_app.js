import '../styles/globals.css'
import { TwitterProvider } from '../context/TwitterContext'
import '../lib/hexStyles.css'

function MyApp({ Component, pageProps }) {
  return (
    <TwitterProvider>
      <Component {...pageProps} />
    </TwitterProvider>
  )
}

export default MyApp
