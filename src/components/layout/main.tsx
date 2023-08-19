import { Flex, FlexProps } from "@chakra-ui/react";

export const Main = (props: FlexProps) => {
  return (
    <Flex
      as="main"
      flex={1}
      flexDirection="column"
      bg="rgba(213,254,255,.03)"
      {...props}
    />
  );
};
