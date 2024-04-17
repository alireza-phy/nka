import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa" dir={"rtl"}>
      <Head />
      <body>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MC7W65ZD"height="0"width="0"style={{display:"none",visibility:"hidden"}}/>
      </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
