import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        --stripe: #FFF7EB;
        --bg: #DEE1E3;
        background: linear-gradient(135deg, var(--bg) 25%, transparent 25%) -50px 0,
          linear-gradient(225deg, var(--bg) 25%, transparent 25%) -50px 0,
          linear-gradient(315deg, var(--bg) 25%, transparent 25%),
          linear-gradient(45deg, var(--bg) 25%, transparent 25%);
        background-size: 100px 100px;
        background-color: var(--stripe);
        height: 100vh;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        color: #565F76;
    }
      
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    .title {
        height: 10vh;    
    }

    .score {
        height: 10vh;
    }

    .number {
        color: #7D87A1;
    }

    .next-wrapper {
        height: 10vh;    
    }

    .start, .next {
        cursor: pointer;
        border: none;
        border-radius: 8px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
        // background-color: white;
    }
`