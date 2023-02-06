import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={"bg-gradient-to-tr from-black to-black via-sky-600"}>
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}
