import { Flex, FlexProps } from "@chakra-ui/react";

export const Header = (props: FlexProps) => {
  return (
    <Flex
      px={6}
      h="70px"
      as="header"
      bg="#000000"
      color="white"
      position="relative"
      alignItems="center"
      borderBottomWidth="1px"
      borderColor="rgba(223,239,254,0.14)"
      {...props}
    />
  );
};
