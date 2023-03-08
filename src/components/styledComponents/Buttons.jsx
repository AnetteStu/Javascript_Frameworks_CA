import styled from "styled-components";

export const Button = styled.button `
background-color: pink;
color: white;
border: transparent solid 2px;
border-radius: .2em;
margin: 0 .5em 0 0;
transition: all .2s ease-in-out;
:hover {
  border: #e38787 solid 2px;
}
`

export const SubmitButton = styled(Button) `
  ${'' /* background-color: grey;  */}
  border-radius: .2em;

  transition: .2s ease-in-out;

  &:hover {
    letter-spacing: .2em;
  }
`

export const CartButton = styled(Button) `
background-color: red;
transition: .2s ease-in-out;

:hover {
  padding: .5em;
  letter-spacing: .2em;
  font-weight: bold;
}
`

export const FilterInput = styled.input `
  width: 100%;
  ${'' /* border-radius: .5em; */}
  padding: .2em .5em;
  transition: .2s ease-in-out;
  
  background-color: transparent;
  outline: 1px solid transparent;
  border: 1px solid transparent;

  &:focus-visible {
    background-color: transparent;
    outline: 1px solid transparent;
    border: 1px solid transparent;
    border-bottom: 2px solid gray;

    &::placeholder {
      transition: .2s ease-in-out;
      color: transparent;
    }
  }

  ::placeholder {
  font-size: 1em;
  letter-spacing: 2px;
  }
`

export const ContactInput = styled(FilterInput) `
  width: 35%;
  border-bottom: 2px solid gray;
  display: block;

  &::placeholder {
    opacity: 0;
    transition: all .2s ease-in-out;
  }

  &:focus::placeholder {
    opacity: 1; 
    transition: all .2s ease-in-out;
  }

`

export const ContactLabel = styled.label `
  color: grey;
  position: relative;
  top: 30px;
  transition: 0.2s ease all

  ${ContactInput}:focus ~ & {
    top: -30px;
    color: red;
    font-weight: bold;
  }
`