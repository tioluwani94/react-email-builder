import { Stack, StackProps } from "@chakra-ui/react";

export const SideNav = (props: StackProps) => {
  return (
    <Stack
      px={6}
      as="aside"
      spacing={4}
      bg="#000000"
      minW="275px"
      maxW="275px"
      borderRightWidth="1px"
      borderColor="rgba(223,239,254,0.14)"
      {...props}
    />
  );
};
