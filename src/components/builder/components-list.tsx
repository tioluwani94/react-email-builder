import { useEditorReducer } from "@/helpers/reducer";
import { components } from "@/helpers/ui";
import { Text as ChakraText, SimpleGrid } from "@chakra-ui/react";
import { OptionButton } from "../layout";
import { Components } from "@/helpers/component";
import { v4 as uuidV4 } from "uuid";

export const NavComponentsList = () => {
  const { addComponentToTree } = useEditorReducer();

  return (
    <SimpleGrid px={6} columns={[1, 1, 2, 2]} gap={2}>
      {Object.keys(components).map((c) => (
        <OptionButton
          key={c}
          onClick={() =>
            addComponentToTree({
              ...Components[c],
              component: c,
              _uid: uuidV4(),
            })
          }
        >
          {components[c].icon}
          <ChakraText mt={1} fontSize="0.75rem">
            {components[c].label}
          </ChakraText>
        </OptionButton>
      ))}
    </SimpleGrid>
  );
};
