import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  @font-face {font-family: 'Noto Sans KR';font-style: normal;
  font-weight: 100;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff2) 
  format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff) 
  format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.otf) format('opentype');}

  @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 300;
  src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff2) 
  format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff) 
  format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.otf) format('opentype');}

  @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 400;
  src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2) 
  format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff) 
  format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf) format('opentype');}

  @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 500;
  src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff2) format('woff2'),
  url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff) format('woff'),
  url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.otf) format('opentype');}

  @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 700;
  src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2) 
  format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff) 
  format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf) format('opentype');}

  @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 900;
  src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff2) 
  format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff)
  format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.otf) format('opentype');}
  
  html {
      font-size: 100%;
      font-family: 'Noto Sans KR', sans-serif;
      min-height:100vh;
  }

  body {
    height: 100%;
  }

  * {
      box-sizing: border-box;
      -webkit-touch-callout: none;
      -webkit-tap-highlight-color: transparent;
      :focus:not(:focus-visible){
      outline: none;
    }
  }

  *:not(input, textarea) {
    user-select: none;
  }

  a {
    text-decoration: none;
    color: var(--color-white);
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  button {
    background: transparent;
    cursor: pointer;
    border: none;
    padding: 0;
  }
`;

export default GlobalStyles;
