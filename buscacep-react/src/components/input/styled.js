import styled from 'styled-components'
//import InputMask from 'react-input-mask';

export const Input = ({onChange}) => {
  return (
    <InputCep type="text" placeholder="00000-000" onChange={onChange} autoFocus />
    // <InputCep>
    //   <InputMask mask="99999-999" type="text" onChange={props.onChange} autoFocus/>
    // </InputCep>
  )
}

const InputCep = styled.input`
  height: 40px;
  text-align: center;
  font-size: 20px;
/*
  ::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }
  ::-webkit-outer-spin-button{
        -webkit-appearance: none;
        margin: 0;
    } */

`;