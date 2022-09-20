import { createGlobalStyle } from 'styled-components';


export const GlobalStyle  = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    @media (max-width: 1080px) {
        font-size: 93.76%;
    }
    @media (max-width: 1080px) {
        font-size: 87.6%;
    }
}
body {
    
    -webkit-font-smoothing: antialiased;
    
    font-family: 'Lato', sans-serif;
}
body input, textarea, button{
    font-weight: 400;
    font-family: 'Lato', sans-serif;
}
h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
} 
button{
    cursor: pointer;
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}
a{
    text-decoration: none;
    color: #F9F9F9;
}
li{
    list-style: none;
}

`