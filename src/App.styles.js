import styled, { createGlobalStyle, keyframes } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

@font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Regular.ttf');
    font-style: normal;
}

html,
body {
  font-family: 'Roboto', sans-serif;
  color: #000000;
}

button{
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  border: none;
  outline: none;
}

ul li {
  list-style: none;
}
`

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`

export const Header = styled.header`
  background-color: #a4082a;
  margin: 0 auto;
  padding: 20px 10px;
`

export const MainContainer = styled.div`
  max-width: 1208px;
  margin: 0 auto;
  padding: 30px 10px 30px;
`

export const Button = styled.button`
  color: #fff;
  background-color: #a4082a;
  border-radius: 6px;
  border: 1px solid #fff;
  padding: 8px 24px;
  font-size: 16px;
  line-height: 150%;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: #810621;
  }
`

const rotate = keyframes`
0% {
  transform: rotate(0)
}
100% {
  transform: rotate(360deg)
}
`

export const Loader = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin-top: 150px;
  left: 550px;

  &::before,
  &::after {
    content: '';
    border-radius: 50%;
    position: absolute;
    inset: 0;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3) inset;
  }
  &::after {
    box-shadow: 0 5px 0 #a4082a inset;
    animation: ${rotate} 2s linear infinite;
  }
`

export const Error = styled.div`
  color: #a4082a;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  text-align: left;
`
