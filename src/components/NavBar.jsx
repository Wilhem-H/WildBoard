import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import logowild from "../assets/logowild.jpg";
import laptopHQ from "../assets/laptopHQ.jpg";
import menu_icon from "/menuIcon.svg";

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

    @media (max-width: 880px) {
      height: 10vh;
    }
  }
`;

const Img = styled.img`
  width: 130px;
  height: auto;
  margin: 10px;
  margin-right: 15px;
  border-radius: 7px;

  @media (max-width: 768px) {
    height: 7vh;
    width: auto;
  }
`;

const HeadSection = styled.section`
  width: 100%;
  height: 87vh;
  overflow-y: auto;
  background-image: url(${laptopHQ});
  background-size: 100% 100%;

  @media (max-width: 768px) {
    height: 50vh;
    width: auto;
  }
`;

const P = styled.p`
  color: white;
  font-weight: bold;
  font-size: 2.2em;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }
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
  padding: 4%;
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
  padding: 4%;

  @media (max-width: 880px) {
    display: none;
  }
`;

const CurrentPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 27%;
  left: 45%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    top: 43%;
  }
`;

function NavBar() {
  const [scrollTop, setScrollTop] = useState(false);
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(true);

  const openMenuMobile = () => {
    setOpenMenu((value) => !value);
  };

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
      <div
        className={
          openMenu ? "overlay_menu_mobile" : "overlay_menu_mobile open"
        }
        onClick={openMenuMobile}
      />
      <Header className={scrollTop ? "scrolled" : ""}>
        <Div className="img">
          <Img src={logowild} alt="logo école wild code school" />
          <P className="title">WildBoard</P>
        </Div>

        <div className="navbar_burger" onClick={openMenuMobile}>
          <img src={menu_icon} />
        </div>

        <div className={openMenu ? "burgerMenu_close" : "burgerMenu"}>
          <div className="navbar_burger_close" onClick={openMenuMobile}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <Li>
            <Link to="/" className="navBar" onClick={openMenuMobile}>
              Home
            </Link>
          </Li>
          <Li>
            <Link to="/team" className="navBar" onClick={openMenuMobile}>
              Team
            </Link>
          </Li>
          <Li>
            <Link to="/tools" className="navBar" onClick={openMenuMobile}>
              Tools
            </Link>
          </Li>
          <Li>
            <Link to="/support" className="navBar" onClick={openMenuMobile}>
              Support
            </Link>
          </Li>
        </div>
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
