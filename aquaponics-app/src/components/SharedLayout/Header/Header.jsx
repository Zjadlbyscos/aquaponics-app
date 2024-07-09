import logo from "../logo.png"
import { Link } from "react-router-dom";
import { HeaderWrapper } from "./Header.styled";

export const Header = () => {
    return (

      <section >
        <HeaderWrapper>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        </HeaderWrapper>
     
      </section>
     
    );
  };