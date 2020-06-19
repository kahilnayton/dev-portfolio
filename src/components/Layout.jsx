import React from "react";
import styled from "@emotion/styled";
import {Global} from "@emotion/core";
import resetStyles from "../styles/reset";
import globalStyles from '../styles/global';
import typeStyles from '../styles/typography';
import Footer from "./Footer";
import Header from "./Header";

const LayoutContainer = styled.div`
`;

const Layout = ({children}) => (
  <LayoutContainer>
    <Global styles={[resetStyles, globalStyles, typeStyles]}/>

    <div className="Layout">
      <Header/>

      <main className="Layout__content">
        {children}
      </main>

      <Footer/>
    </div>

  </LayoutContainer>
);

export default Layout;
