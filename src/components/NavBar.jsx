import { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import logowild from "../assets/logowild.jpg";

const Header = styled.header`
  display: flex;
  // position: fixed;
  justify-content: space-between;
  list-style: none;
  height: 15vh;
  box-sizing: border-box;
  width: 100%;
  &.scrolled {
    background-color: rgba(190, 0, 0,0.85);
    };
  }
`;

const Img = styled.img`
  width: 130px;
  height: auto;
  margin: 10px;
  margin-right: 15px;
  border-radius: 7px;
`;

const HeadSection = styled.section`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-image: url(./src/assets/laptopHQ.jpg);
  background-size: 100% 100%;
`;

const P = styled.p`
  color: white;
  font-weight: bold;
  font-size: 2.2em;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Li = styled.li`
  display: flex;
  text-decoration: none;
  list-style: none;
  color: rgb(241, 241, 241);
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
  margin-right: 8px;
  font-weight: bold;
`;

const Ul = styled.ul`
  display: flex;
  text-decoration: none;
  list-style: none;
  color: rgb(241, 241, 241);
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
  margin-right: 8px;
  font-weight: bold;
`;

const CurrentPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 31%;
  left: 45%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 300px;
`;

function NavBar() {
  const [scrollTop, setScrollTop] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY >= 600) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const thisCurrentPage = location.pathname.split("/").pop();
  const capitalizedPage =
    thisCurrentPage.charAt(0).toUpperCase() + thisCurrentPage.slice(1);

  return (
    <HeadSection>
      <Header className={scrollTop ? "scrolled" : ""}>
        <Div className="img">
          <Img src={logowild} alt="logo école wild code school" />
          <P className="title">WildBoard</P>
        </Div>

        <Ul className="menu">
          <Li>
            <Link to="/" className="navBar">
              Home
            </Link>
          </Li>
          <Li>
            <Link to="/team" className="navBar">
              Team
            </Link>
          </Li>
          <Li>
            <Link to="/tools" className="navBar">
              Tools
            </Link>
          </Li>
          <Li>
            <Link to="/support" className="navBar">
              Support
            </Link>
          </Li>
        </Ul>
      </Header>
      <CurrentPage>
        <p className="currentPage">
          {thisCurrentPage ? capitalizedPage : "Home"}
        </p>
      </CurrentPage>
    </HeadSection>
  );
}

export default NavBar;
