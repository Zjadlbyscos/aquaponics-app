import styled from "styled-components";

export const DetailDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--background-2);
    padding: 2vw;
    border-radius: 20px;
    box-shadow: -1px 3px 23px -14px rgba(0, 111, 168, 1);
    gap: 2vw;


`
export const WrapperDetail = styled.div`
display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1vw;
`

export const EditDiv = styled.div`
    display:flex ;
    flex-direction: row;
    justify-content: space-between;
    
 label{
    width: 100%;
 }

`