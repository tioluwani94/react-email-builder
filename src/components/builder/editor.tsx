import { useEditorReducer } from "@/helpers/reducer";
import { Box, Flex, IconButton, Stack, Text, Tooltip } from "@chakra-ui/react";
import React, { useState } from "react";
import { ButtonEditor } from "../editors/button";
import { FiCopy, FiTrash, FiX } from "react-icons/fi";
import { v4 as uuidV4 } from "uuid";

export const BuilderEditor = () => {
  const {
    state,
    closeEditor,
    updateComponent,
    addComponentToTree,
    removeComponentFromTree,
  } = useEditorReducer();

  const { componentToEdit } = state;

  const [comp, setComp] = useState(componentToEdit);

  const handleRemoveComponent = () => {
    removeComponentFromTree(componentToEdit._uid);
    closeEditor();
  };

  const handleClose = () => {
    updateComponent({ component: comp });
    closeEditor();
  };

  return (
    <Flex h="100%" flexDirection="column">
      <Flex
        px={2}
        h="40px"
        alignItems="center"
        borderTopWidth="1px"
        borderTopColor="white"
        justifyContent="space-between"
      >
        <Text
          color="white"
          fontSize="sm"
          fontWeight="semibold"
          textTransform="uppercase"
        >
          Editor
        </Text>
        <Stack direction="row" alignItems="center">
          <Tooltip aria-label="Duplicate" label="Duplicate">
            <IconButton
              size="xs"
              variant="ghost"
              aria-label="Duplicate"
              icon={<FiCopy color="white" />}
              _hover={{
                bg: "gray.900",
              }}
              onClick={() =>
                addComponentToTree({ ...componentToEdit, _uid: uuidV4() })
              }
            />
          </Tooltip>
          <Tooltip aria-label="Delete" label="Delete">
            <IconButton
              size="xs"
              variant="ghost"
              aria-label="Remove component"
              onClick={handleRemoveComponent}
              icon={<FiTrash color="white" />}
              _hover={{
                bg: "gray.900",
              }}
            />
          </Tooltip>
          <Tooltip aria-label="Close" label="Close">
            <IconButton
              size="xs"
              variant="ghost"
              aria-label="Close"
              onClick={handleClose}
              icon={<FiX color="white" />}
              _hover={{
                bg: "gray.900",
              }}
            />
          </Tooltip>
        </Stack>
      </Flex>
      <Box flex={1} overflowY="auto">
        {componentToEdit.component === "button" && (
          <ButtonEditor componentToEdit={comp} onUpdate={setComp} />
        )}
      </Box>
    </Flex>
  );
};
