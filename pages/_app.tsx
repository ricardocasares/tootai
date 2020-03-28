import "@/css/global.css";

import Head from "next/head";
import { AppProps } from "next/app";
import { Frame } from "@/components/Frame";

export default ({ Component, pageProps }: AppProps) => (
  <Frame>
    <Head>
      <title>tootai</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/16x16.png" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
    <Component {...pageProps} />
  </Frame>
);
