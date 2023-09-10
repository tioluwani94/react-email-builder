import { Stack, StackProps } from "@chakra-ui/react";

export const SideNav = (props: StackProps) => {
  return (
    <Stack
      h="100%"
      as="aside"
      spacing={0}
      bg="#000000"
      minW="275px"
      maxW="275px"
      borderRightWidth="1px"
      borderColor="rgba(223,239,254,0.14)"
      {...props}
    />
  );
};
