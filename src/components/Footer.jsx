import styled from "styled-components";

const Footer1 = styled.footer`
  background-color: rgb(190, 0, 0);
  height: 6vh;
  width: 100%;
  margin-top: auto;
  bottom: 0;
`;

const P = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

function Footer() {
  return (
    <>
      <Footer1>
        <P className="signature">Wil</P>
        <P className="signature">https://github.com/Wilhem-H</P>
      </Footer1>
    </>
  );
}

export default Footer;
