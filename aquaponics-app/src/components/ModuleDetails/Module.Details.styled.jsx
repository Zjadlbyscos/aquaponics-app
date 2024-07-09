import styled from "styled-components";

export const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-2);
  padding: 5vw;
  border-radius: 20px;
  box-shadow: -1px 3px 23px -14px rgba(0, 111, 168, 1);
  gap: 2vw;
  max-width: 1200px;
  margin: auto;
`;
export const WrapperDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1vw;
`;

export const EditDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 2vw;

  label {
    width: 100%;
    display: flex;
    flex-direction: column;

    input {
      max-width: 50%;
      min-height: 25px;
      height: 3vw;
    }
    & textarea {
      width: 100%;
      min-height: 50px;
      height: 10vw;
    }
  }
`;
