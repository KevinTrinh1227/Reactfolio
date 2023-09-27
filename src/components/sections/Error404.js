import React from "react";
import styled from "styled-components";

const Error404 = () => {
  const Bsod = styled.main`
    background-color: #17202a;
    padding-top: 10%;
  `;

  const NegTitle = styled.h1`
    color: #ecf0f1;
    text-align: center;
  `;

  const Nav = styled.nav`
    text-align: center;
  `;

  const Link = styled.a`
    color: #b95;
    text-decoration: none;
  `;

  return (
    <Bsod>
      <NegTitle>404 - Page Not Found</NegTitle>
      <p>An error has occured, to continue:</p>
      <p>
        * Return to our homepage.
        <br />* Send us an e-mail about this error and try later.
      </p>
      <Nav>
        <Link href="https://www.kevintrinh.dev">Home page</Link>&nbsp;|&nbsp;
        <Link href="mailto:kevintrinh1227@gmail.com">Email Me</Link>
      </Nav>
    </Bsod>
  );
};

export default Error404;
