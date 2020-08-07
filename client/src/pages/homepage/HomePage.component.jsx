import React from "react";

import { HomePageContainer } from "./HomePage.styles";
import DirectoryContainer from "../../components/directory/Directory.container";

const HomePage = () => (
  <HomePageContainer>
    <DirectoryContainer />
  </HomePageContainer>
);

export default HomePage;
