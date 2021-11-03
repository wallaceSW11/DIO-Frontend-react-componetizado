import styled from 'styled-components'

export const Main = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: var(--secondary-color);
    flex-grow: 2;
    width: 100%;

    strong{
        color: var(--primary-color)
    }
`;

export const AddressData = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 15px;
  width: 80%;
`;
