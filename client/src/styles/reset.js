import { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle`
    * {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        background-clip: padding-box;
        margin: 0;
        outline: 0;
        padding: 0;
        word-break: break-word;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    html,
    body {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        font-family: sans-serif;
        overflow-x: hidden;
        position: relative;
    }

    html {
        font-size: 62.5%;
        height: 100%;
    }

    body {
        height: 100%;
        font-family: 'Roboto', sans-serif; /* Default font family */
        color: rgba(255, 255, 255, 0.85); /* Default text color */
        letter-spacing: normal; /* Default letter spacing */
        font-size: 16px; /* Default font size */
        line-height: 22px; /* Default line height */
        font-weight: normal; /* Default font-weight */
        background: #090C0D; /* Default background */
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }
    
    img {
        max-width: 100%;
        user-select: none;
    }

    ol, ul {
        list-style: none;
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: 100%;
        font-weight: 400;
    }

    a {
        background: transparent;
        color: inherit;
        text-decoration: none;
    }
`

export default Reset