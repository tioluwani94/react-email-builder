import { useEditorReducer } from "@/helpers/reducer";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export const ButtonEditor: React.FC<{
  componentToEdit: any;
  onUpdate(componentToEdit: any): void;
}> = ({ onUpdate, componentToEdit }) => {
  return (
    <Accordion defaultIndex={[0, 1, 2, 3, 4]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton px={2}>
            <Box
              as="span"
              flex="1"
              color="white"
              fontSize="sm"
              textAlign="left"
              fontWeight="semibold"
            >
              Content
            </Box>
            <AccordionIcon boxSize={4} color="white" />
          </AccordionButton>
        </h2>
        <AccordionPanel p={2} color="white">
          <Stack>
            <Input
              size="sm"
              placeholder="Enter Content"
              value={componentToEdit.children[0]}
              onChange={(e) => {
                onUpdate({
                  ...componentToEdit,
                  children: [e.target.value],
                });
              }}
            />
          </Stack>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton px={2}>
            <Box
              as="span"
              flex="1"
              color="white"
              fontSize="sm"
              textAlign="left"
              fontWeight="semibold"
            >
              Action
            </Box>
            <AccordionIcon boxSize={4} color="white" />
          </AccordionButton>
        </h2>
        <AccordionPanel p={2} color="white">
          <Stack>
            <Text fontSize="xs" fontWeight="semibold">
              Action Type
            </Text>
            <Input
              size="sm"
              placeholder="Enter URL"
              onChange={(e) =>
                onUpdate({
                  ...componentToEdit,
                  props: {
                    ...componentToEdit.props,
                    buttonProps: {
                      ...componentToEdit.props.buttonProps,
                      href: e.target.value,
                    },
                  },
                })
              }
              value={componentToEdit.props.buttonProps.href}
            />
            <Select
              size="sm"
              value={componentToEdit.props.buttonProps.target}
              onChange={(e) =>
                onUpdate({
                  ...componentToEdit,
                  props: {
                    ...componentToEdit.props,
                    buttonProps: {
                      ...componentToEdit.props.buttonProps,
                      target: e.target.value,
                    },
                  },
                })
              }
            >
              <option value="_blank">New Tab</option>
              <option value="_self">Same Tab</option>
            </Select>
          </Stack>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton px={2}>
            <Box
              as="span"
              flex="1"
              color="white"
              fontSize="sm"
              textAlign="left"
              fontWeight="semibold"
            >
              Button Options
            </Box>
            <AccordionIcon color="white" boxSize={4} />
          </AccordionButton>
        </h2>
        <AccordionPanel p={2} color="white"></AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton px={2}>
            <Box
              as="span"
              flex="1"
              color="white"
              fontSize="sm"
              textAlign="left"
              fontWeight="semibold"
            >
              Spacing
            </Box>
            <AccordionIcon color="white" boxSize={4} />
          </AccordionButton>
        </h2>
        <AccordionPanel p={2} color="white"></AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton px={2}>
            <Box
              as="span"
              flex="1"
              color="white"
              fontSize="sm"
              textAlign="left"
              fontWeight="semibold"
            >
              General
            </Box>
            <AccordionIcon color="white" boxSize={4} />
          </AccordionButton>
        </h2>
        <AccordionPanel p={2} color="white">
          <Stack>
            <Text fontSize="xs" fontWeight="semibold">
              Container Padding
            </Text>
            <Stack direction="row">
              <Stack direction="column">
                <Text fontSize="xs" fontWeight="500">
                  Top
                </Text>
                <NumberInput
                  size="xs"
                  onChange={(value) => {
                    onUpdate({
                      ...componentToEdit,
                      props: {
                        ...componentToEdit.props,
                        layoutProps: {
                          ...componentToEdit.props.layoutProps,
                          paddingTop: Number(value),
                        },
                      },
                    });
                  }}
                  value={componentToEdit.props.layoutProps["paddingTop"]}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper color="white" />
                    <NumberDecrementStepper color="white" />
                  </NumberInputStepper>
                </NumberInput>
              </Stack>
              <Stack direction="column">
                <Text fontSize="xs">Right</Text>
                <NumberInput
                  size="xs"
                  onChange={(value) => {
                    onUpdate({
                      ...componentToEdit,
                      props: {
                        ...componentToEdit.props,
                        layoutProps: {
                          ...componentToEdit.props.layoutProps,
                          paddingRight: Number(value),
                        },
                      },
                    });
                  }}
                  value={componentToEdit.props.layoutProps["paddingRight"]}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper color="white" />
                    <NumberDecrementStepper color="white" />
                  </NumberInputStepper>
                </NumberInput>
              </Stack>
            </Stack>
            <Stack direction="row">
              <Stack direction="column">
                <Text fontSize="xs">Left</Text>
                <NumberInput
                  size="xs"
                  onChange={(value) => {
                    onUpdate({
                      ...componentToEdit,
                      props: {
                        ...componentToEdit.props,
                        layoutProps: {
                          ...componentToEdit.props.layoutProps,
                          paddingLeft: Number(value),
                        },
                      },
                    });
                  }}
                  value={componentToEdit.props.layoutProps["paddingLeft"]}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper color="white" />
                    <NumberDecrementStepper color="white" />
                  </NumberInputStepper>
                </NumberInput>
              </Stack>
              <Stack direction="column">
                <Text fontSize="xs">Bottom</Text>
                <NumberInput
                  size="xs"
                  onChange={(value) => {
                    onUpdate({
                      ...componentToEdit,
                      props: {
                        ...componentToEdit.props,
                        layoutProps: {
                          ...componentToEdit.props.layoutProps,
                          paddingBottom: Number(value),
                        },
                      },
                    });
                  }}
                  value={componentToEdit.props.layoutProps["paddingBottom"]}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper color="white" />
                    <NumberDecrementStepper color="white" />
                  </NumberInputStepper>
                </NumberInput>
              </Stack>
            </Stack>
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
