import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
          :root {
               --primary-color :#F6F5FF;
               --primary-background-color-btn : #FB2E86; 
               --primary-background-color-hover-btn : #99003d;
               --primary-background-color-active-btn : ;
               --red-color : #fa0213; 
               --title-color :  #151875;
          }
          
          * {
               padding : 0;
               margin  : 0;
               box-sizing : border-box;
          }
   
          html {
               font-size : 62.5%;
               
          }
   
          body {
               font-size :1.6rem;
               text-rendering: optimizeSpeed; 
               font-family: 'Roboto Slab', sans-serif;
               overflow: auto;
          }
          button,input[type="text"] {
                outline: none;
          }
           
`;

export default GlobalStyle;
