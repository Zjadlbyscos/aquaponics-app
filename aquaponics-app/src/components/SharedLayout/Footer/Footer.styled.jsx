import styled from "styled-components";
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--background-2);
padding: 3vw 0;
  a {
    color:var(--primary-color);
    position: relative;
    text-align: center;
}
    a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: var(--primary-color);
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }

  a:hover::before,
  a:focus::before {
    transform-origin: left;
    transform: scaleX(1);
  }

`;
