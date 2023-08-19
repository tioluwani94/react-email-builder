import { Flex, Stack } from "@chakra-ui/react";
import { ReactNode, useMemo } from "react";
import { MotionBox } from "./motion-box";

export const ViewSwitcher = (props: {
  activeView: "preview" | "source";
  onViewSwitch(view: "preview" | "source"): void;
}) => {
  const { onViewSwitch, activeView } = props;
  return (
    <Stack
      isInline
      w="200px"
      spacing="0"
      p="0.125rem"
      rounded="md"
      height="40px"
      borderWidth="1px"
      alignItems="center"
      position="relative"
      bg="rgba(213,254,255,.03)"
      borderColor="rgba(233,239,254,.14)"
    >
      <ViewSwitcherTab
        isActive={activeView === "preview"}
        onClick={() => onViewSwitch("preview")}
      >
        Preview
      </ViewSwitcherTab>
      <ViewSwitcherTab
        isActive={activeView === "source"}
        onClick={() => onViewSwitch("source")}
      >
        Source
      </ViewSwitcherTab>
    </Stack>
  );
};

const ViewSwitcherTab = (props: {
  onClick(): void;
  isActive: boolean;
  children: ReactNode;
}) => {
  const { onClick, children, isActive } = props;

  return (
    <Flex
      py={2}
      px={3}
      width="50%"
      as="button"
      height="100%"
      cursor="pointer"
      onClick={onClick}
      bg="transparent"
      fontWeight="400"
      alignItems="center"
      position="relative"
      justifyContent="center"
      transition="all 0.3s ease-out 0s"
      color={isActive ? "white" : "gray.600"}
      _hover={{
        color: "white",
      }}
    >
      {children}
      {isActive && (
        <MotionBox
          //@ts-ignore
          transition={{
            layout: {
              duration: 0.2,
              ease: "easeOut",
            },
          }}
          inset="0"
          width="100%"
          height="100%"
          rounded="md"
          position="absolute"
          layoutId="view-switcher"
          bg="rgba(226,240,253,.08)"
        />
      )}
    </Flex>
  );
};
