import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Jost';
        src: url('/path/to/your/font/Jost-Regular.woff2') format('woff2'),
         url('/path/to/your/font/Jost-Regular.woff') format('woff');
    }
    html{
        scroll-behavior: smooth;
        box-sizing: border-box;
    }
    *,*::before,*::after{
        margin:0;
        padding: 0;
        box-sizing: inherit;
    }
    body{
        font-family: 'Jost', sans-serif;
        overflow-x: hidden;
        font-weight: 400;
        line-height: 1.7;
    }
    a,button{
        font-family: 'Jost', sans-serif;
    }
    h1 {
        font-size: 2.6rem;
    }
    h2 {
        font-size: 2rem;
        font-weight: 400;
        line-height: 1.2
    }
    img {
        width: 100%;
        height: 100%;
    }
      
    ul {
        list-style: none;
    }`;