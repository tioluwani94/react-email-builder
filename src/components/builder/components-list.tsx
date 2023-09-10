import { useEditorReducer } from "@/helpers/reducer";
import { components } from "@/helpers/ui";
import { Text as ChakraText, SimpleGrid } from "@chakra-ui/react";
import { OptionButton } from "../layout";

export const NavComponentsList = () => {
  const { addComponentToTree } = useEditorReducer();

  return (
    <SimpleGrid columns={[1, 1, 2, 2]} gap={2}>
      {Object.keys(components).map((c) => (
        <OptionButton
          key={c}
          onClick={() => addComponentToTree(components[c].componentKey)}
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
