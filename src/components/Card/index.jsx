import React, { useState } from "react";
import { Box} from "styled-minimal";
import { Loader } from "./style";

const Cards = ({ color, duration }) => {
  const [background, setBackground] = useState("transparent");
  const { colors } = getTheme();

  function changeColor() {
    setBackground(color);
  }

  setInterval(changeColor, duration);

  return (
    <Box
      alignItems="center"
      bg={background}
      border={`5px solid ${colors[color]}`}
      margin="5px"
      borderRadius="10px"
      display="flex"
      height={100}
      justifyContent="center"
    >
      <Loader color={colors[color]} size={30} />
    </Box>
  );
};

export default Cards;