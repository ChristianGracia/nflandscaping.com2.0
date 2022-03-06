import { FunctionComponent } from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import createEmotionCache from "../lib/utility/createEmotionCache";
import lightThemeOptions from "../lib/styles/theme/lightThemeOptions";
import "../lib/styles/globals.css";
import Header from "../lib/components/ui/header";
import Footer from "../lib/components/ui/footer";
interface appProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

const app: FunctionComponent<appProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default app;
