import styled from "styled-components";

export const Button = styled.button `
background-color: pink;
color: white;
border: transparent solid 2px;
border-radius: .2em;
margin: 0 .5em 0 0;
transition: all .2s ease-in-out;
transform: scale(1.2);
:hover {
  border: #e38787 solid 2px;
}

:active {
  transform: scale(1.1);
}
`

export const SubmitButton = styled(Button) `
  border-radius: .2em;

  transition: .2s ease-in-out;

  &:hover {
    letter-spacing: .2em;
  }
`
export const IncreaseButton = styled.button `
  transition: all .1s ease-in-out;
  background-color: #ffa971;
  border-radius: .2em;
  border: 0;

  display: flex;
  align-items: flex-end;
  align-content: center;
  flex-direction: column;
  
  &:hover {
    transform: scale(1.2);
    background-color: #93d355;
  }
`

export const DecreaseButton = styled(IncreaseButton) `
:hover {
  background-color: red;
}
`

export const FilterInput = styled.input `
  width: 100%;
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
      left: 0;
    }
  }
  ::placeholder {
  font-size: 1.5em;
  letter-spacing: 2px;
  color: #b9233d;

    &::before {
      content: "search"
    }
    ${'' /* Why u no work */}
  }
`

export const ContactInput = styled(FilterInput) `
  font-size: .8em;
  color: grey;
  width: 90%;
  border-bottom: 2px solid gray;
  display: block;

  &::placeholder {
    opacity: 1;
    transition: all .2s ease-in-out;
  }
`
export const ContactLabel = styled.label `
  color: grey;
  position: relative;
  transition: 0.2s ease all
`

export const CartButton = styled(Button) `
background-color: red;
transition: .2s ease-in-out;
height: 50px;
width: 140px;
transform: scale(1);

  :hover {
    padding: .5em;
    letter-spacing: .2em;
    font-weight: bold;
  }
`

export const QuantityInput = styled(FilterInput)`
  width: 50px;
`

export const CartDeleteButton = styled(Button)`
${'' /* transform: scale(1); */}
`

export const CheckoutButton = styled(Button)`
  height: 50px;
  width: 130px;
  transform: scale(1)
`