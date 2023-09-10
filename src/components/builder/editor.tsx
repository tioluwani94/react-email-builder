import { useEditorReducer } from "@/helpers/reducer";
import { Box, Flex, IconButton, Stack, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { ButtonEditor } from "../editors/button";
import { FiTrash, FiX } from "react-icons/fi";

export const BuilderEditor = () => {
  const { state, closeEditor, removeComponentFromTree } = useEditorReducer();

  const { componentToEdit } = state;

  const handleRemoveComponent = () => {
    removeComponentFromTree(componentToEdit._uid);
    closeEditor();
  };

  return (
    <Flex h="100%" flexDirection="column">
      <Flex h="40px" px="2" alignItems="center" justifyContent="space-between">
        <Text textTransform="uppercase" fontSize="md">
          Content
        </Text>
        <Stack direction="row" alignItems="center">
          <Tooltip aria-label="Delete" label="Delete">
            <IconButton
              size="xs"
              variant="ghost"
              icon={<FiTrash />}
              aria-label="Remove component"
              onClick={handleRemoveComponent}
            />
          </Tooltip>
          <Tooltip aria-label="Close" label="Close">
            <IconButton
              size="xs"
              variant="ghost"
              icon={<FiX />}
              aria-label="Close"
              onClick={closeEditor}
            />
          </Tooltip>
        </Stack>
      </Flex>
      <Box flex={1} overflowY="auto">
        {componentToEdit.type === "button" && <ButtonEditor />}
      </Box>
    </Flex>
  );
};
