import '../styles/global.scss'
import Script from 'next/script'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2NQM3JB3X4" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2NQM3JB3X4');
            `
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
