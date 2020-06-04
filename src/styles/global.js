import css from '@emotion/css';
import colors from './colors';
import dimensions from './dimensions';

const globalStyles = css`
  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.orange100};
    scroll-behavior: smooth;
  }
  
  html,
  body,
  #root {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
  }

  body {
    background-color: #fff;
    width: 100%;
    margin: 0 auto;
    font-size: 16px;
    line-height: 1.5;
    color: ${colors.grey900};
    -webkit-font-smoothing: antialiased;

    &.is-locked {
      overflow: hidden;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 14px;
    }

    * {
      box-sizing: border-box;

      &::selection {
        background: ${colors.yellow500};
      }
    }
  }

  /*
  A workaround for forcing accessibility wrappers
  to have a 100% height.
  Reach Router issue here: https: //github.com/reach/router/issues/63
  */
  #___gatsby,
  div[role="group"][tabindex] {
      height: 100%;
      min-height: 100% !important;
  }
  
  @media(min-width: ${dimensions.tabletLandscapeUp}px) {
    body.is-locked {
      overflow: initial;
    }
  }
`;

export default globalStyles;
