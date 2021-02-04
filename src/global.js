import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
    text-rendering: optimizeLegibility;
    font-family: proxima-nova;
  }

  h1 {
    font-size: 24px;
    font-family: 'Tahoma', sans-serif;
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;
  }

  .h1-mobile {
    text-align: left;
    padding-left: 30px;
    padding-top: 8px;
    font-size: 20px;
  }

  h2 {
    font-size: 16px;
    font-family: tahoma;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    justify-content: space-around;
    flex: 1;
  }

  .h2:hover{
    color: #2599d8;

    &:before,
    &:after, 
    span:before, 
    span:after {
      content: attr(data-heading);
      position: absolute;
      overflow: hidden;
    }
    
    &:before {
      color: #d61c5b;
      height: 34%;
      z-index: 5;
    }
    
    &:after {
      color: #f1573f;
      height: 50%;
      z-index: 4;
    }
    
    span {
      &:before {
        color: #feb213;
        height: 66%;
        z-index: 3;
      }
      
      &:after {
        color: #6abc4e;
        height: 80%;
        z-index: 2;
      }
    }
  }

  .container {
    width: 960px;
    max-width: 100%;
    padding: 20px;
    margin: 0 auto;
  }

  .banner {
    display: flex;
    justify-content: space-between;
    margin: 3%;
    margin-top: 0px;
  }

  .banner-left {
    display: flex;
    margin: 10px;
    align-items: center;
    border-top: solid 1px black;
    border-bottom: solid 1px black;
    flex: 1;
    max-width: 25%;
  }

  .banner-right {
    display: flex;
    margin: 10px;
    align-items: center;
    border-top: solid 1px black;
    border-bottom: solid 1px black;
    flex: 1;
    max-width: 25%;
    justify-content: flex-end;
  }

  .banner-link {
    padding: 3px 5px;
    font-size: 12px;
    font-family: tahoma;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
  }

  .banner-link:hover {
    color: gray
  }

  .banner-title {
    text-align: center;
  }  

  .banner-mobile {
    color: black;
    text-align: left;
    height: 3rem;
    width: 100%;
  }  

  img {
    height: auto;
    width: 20rem;
  }

  div {
    text-align: center;
  }

  small {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
`
