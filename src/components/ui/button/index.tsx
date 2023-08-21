import { Box } from "@chakra-ui/react";
import React from "react";
import { Button as REButton } from "@react-email/components";

export const Button = (props: any) => {
  const { children, ...rest } = props;
  return (
    <Box w="100%">
      <REButton {...rest}>{children}</REButton>
    </Box>
  );
};
