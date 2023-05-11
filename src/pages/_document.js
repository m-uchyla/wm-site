import { Html, Head, Main, NextScript } from 'next/document'
import { favicon } from '@/assets'

export default function Document() {
  return (
    <Html lang="pl" >
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Najlepsza wizytówka Twojej firmy to nowoczesna, responsywna i zoptymalizowana strona internetowa. Nasz zespół zaprojektuje ją dla Ciebie!" />
        <meta name="keywords" content="Responsywna, nowoczesna, strona internetowa, strona dla firmy, strona dla biznesu" />
        <meta name="copyright" content="web-masters.pl" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
