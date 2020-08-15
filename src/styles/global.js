import { createGlobalStyle } from "styled-components";
import background from "~/assets/background.png";
import { breakpoints } from "./variables";

export default createGlobalStyle`
  /*Default*/
  *,
  *::after,
  *::before{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html{
    scroll-behavior: smooth;
    font-size: 62.5%; /*1rem === 10px*/

    @media screen and (min-width: ${breakpoints.huge}) {
      font-size: 75%;
    }
  }  
  html, body, #root{
    min-height: 100%;
  }
  body{
    background: #fafafa url(${background}) fixed center no-repeat;
    background-size: cover;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button{
    font-family: 'Roboto', Arial, Helvetica, sans-serif; 
    font-size: 1.6rem;
  }
  button{
    cursor: pointer;
  }
  a{
    text-decoration: none;
    cursor: pointer;
  }
  ul{
    list-style: none;
  }

  /*This project*/
  .color0{background-color: yellow;}
  .color1{background-color: hotpink;}
  .color2{background-color: skyblue;}
  .color3{background-color: yellowgreen;}
  .color4{background-color: orange;}
  .color5{background-color: mediumspringgreen;}
  .color6{background-color: orangered;}
  .color7{background-color: orchid;}
  .color8{background-color: slateblue;}
  .color9{background-color: tomato;}

`;
