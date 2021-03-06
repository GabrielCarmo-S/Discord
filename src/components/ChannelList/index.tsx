import React from "react";
import ChannelButton from "../ChannelButton";

import { Container, Category, AddCategoryIcon } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="Chat-Livre" />
      <ChannelButton channelName="Trabalho" />
      <ChannelButton channelName="CS" />
      <ChannelButton channelName="Valorant" />
      <ChannelButton channelName="Cod" />
    </Container>
  );
};

export default ChannelList;
