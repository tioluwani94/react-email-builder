import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

export const OptionButton = (props: ButtonProps) => {
  return (
    <Button
      px={4}
      height="60px"
      rounded="4px"
      color="white"
      display="flex"
      variant="unstyled"
      borderWidth="1px"
      borderColor="white"
      alignItems="center"
      flexDirection="column"
      justifyItems="center"
      transition="all ease 0.2s"
      _hover={{
        bg: "rgba(226,240,253,.15)",
      }}
      {...props}
    />
  );
};
