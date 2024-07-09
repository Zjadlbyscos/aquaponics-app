import styled from "styled-components";
export const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;

  img {
    width: 50px;
    @media (min-width: 768px) {
      width: 70px;
    }
    @media (min-width: 1024px) {
      width: 80px;
    }
  }
`;
