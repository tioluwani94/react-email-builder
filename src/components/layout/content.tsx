import { Box, BoxProps } from "@chakra-ui/react";

export const Content = (props: BoxProps) => {
  return <Box flex={1} position="relative" overflow="auto" {...props} />;
};
