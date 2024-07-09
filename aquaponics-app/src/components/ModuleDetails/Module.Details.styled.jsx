import styled from "styled-components";

export const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-2);
  padding: 2vw;
  border-radius: 20px;
  box-shadow: -1px 3px 23px -14px rgba(0, 111, 168, 1);
  gap: 2vw;
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
    /* max-width: 48%; */
    width: 100%;
    display: flex;
    flex-direction: column;

    input {
      max-width: 50%;
      height: 3vw;
    }
    & textarea {
      width: 100%;
      min-height: 10vw;
    }
  }
`;
