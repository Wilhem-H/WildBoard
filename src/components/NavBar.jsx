import { Link } from "react-router-dom";
import styled from "styled-components";
import logowild from "../assets/logowild.jpg";

const Header = styled.header`
  display: flex;
  position: fixed;
  justify-content: space-between;
  list-style: none;
  height: 15vh;
  box-sizing: border-box;
  width: 100%;
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
  background-image: url(./src/assets/laptopHQ.jpg);
  background-size: 100% 100%;
`;

function NavBar() {
  return (
    <HeadSection>
      <Header>
        <div className="img">
          <Img src={logowild} alt="logo école wild code school" />
          <p className="title">WildBoard</p>
        </div>

        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/tools">Tools</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
        </ul>
      </Header>
    </HeadSection>
  );
}

export default NavBar;
