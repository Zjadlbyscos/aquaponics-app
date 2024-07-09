import styled from "styled-components";

export const Modulediv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
export const ModuleElemet = styled.ul`
width: 80%;
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vw;
  li {
    background-color: var(--background-2);
    padding: 1vw;
    border-radius: 20px;
    width: 100%;
    box-shadow: -1px 3px 23px -14px #d2dce2b8;
    transition: box-shadow 0.2s linear;

    &:hover,
    &:focus {

        box-shadow: -1px 6px 39px 8px #006fa8;
    }
  a{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
 

`;

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 50%;
  

 
`
