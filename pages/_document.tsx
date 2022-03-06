import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";

import createEmotionCache from "../lib/utility/createEmotionCache";
import Header from "../lib/components/ui/header";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <title>Nature&apos;s Frontier Landscaping - Serving RI and Mass</title>
        <Head>
          <link rel="manifest" href="./manifest.json" />
          <link
            rel="icon"
            type="image/x-icon"
            href="/images/favico/favicon.ico"
          />
          <meta
            name="description"
            content="Natures Frontier Landscaping - Serving RI and Mass"
          />
          <meta name="nflandscaping" content="nflandscaping" />
          <meta
            name="keywords"
            content="landscaping property construction rhode RI mass junk nflandscaping"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favico/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favico/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favico/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#ffc40d" />
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  /* eslint-disable */
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) => (props) =>
        <App emotionCache={cache} {...props} />,
    });
  /* eslint-enable */

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
};
