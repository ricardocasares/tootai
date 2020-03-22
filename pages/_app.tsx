import "@/css/global.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { Frame } from "@/components/Frame";

export default ({ Component, pageProps }: AppProps) => (
  <Frame>
    <Head>
      <title>tootai</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
    <Component {...pageProps} />
  </Frame>
);
