import React from "react";
import { Box, Loader } from "./style";

const Card = ({ color, duration }) => {
    return (
        <Box>
            {color}
            {duration}
            <Loader />
        </Box>
    );
};

export default Card;