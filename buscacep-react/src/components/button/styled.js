import styled from 'styled-components'

export const ButtonSeach = styled.button`
  height: 40px;
  width: 150px;
  font-size: 25px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  border-radius: 5px;
  border: 1px solid var(--primary-color);
  color: yellow;
  background-color: #333;
  transition: all 0.5s ease;
  margin: 10px;

  &:hover{
      color: var(--secondary-color);
      border: 1px solid var(--secondary-color);
  }

`;