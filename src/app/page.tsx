'use client'

import Header from "./ui/Header/Header";
import { ThemeProvider } from 'styled-components';
import { theme } from './ui/styles/themes'
import { GlobalStyle } from "./ui/styles/globalStyle";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header/>
    </ThemeProvider>
  );
}