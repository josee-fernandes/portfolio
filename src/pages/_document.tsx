import { Head, Html, Main, NextScript } from 'next/document'

const Document: React.FC = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Document.displayName = 'DisplayName'

export default Document
