import { Icon, IconProps } from "@chakra-ui/react";

export const ButtonIcon = (props: IconProps) => (
  <Icon viewBox="0 0 512 512" {...props}>
    <path
      fill="currentColor"
      d="M56 32C25.1 32 0 57.1 0 88V256 424c0 30.9 25.1 56 56 56H196c68.5 0 124-55.5 124-124c0-48.9-28.3-91.1-69.3-111.3c23-22.5 37.3-53.9 37.3-88.7c0-68.5-55.5-124-124-124H56zM164 232H48V88c0-4.4 3.6-8 8-8H164c42 0 76 34 76 76s-34 76-76 76zM48 280H164h28 4c42 0 76 34 76 76s-34 76-76 76H56c-4.4 0-8-3.6-8-8V280z"
    />
  </Icon>
);
