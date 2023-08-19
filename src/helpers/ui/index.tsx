import {
  ButtonIcon,
  ColumnIcon,
  ContainerIcon,
  HeadingIcon,
  HrIcon,
  ImageIcon,
  LinkIcon,
  SectionIcon,
  TextIcon,
} from "@/components/icons";

export const components: {
  [key: string]: {
    icon: any;
    label: string;
    componentKey: string;
  };
} = {
  button: {
    label: "Button",
    componentKey: "button",
    icon: <ButtonIcon boxSize="1rem" />,
  },
  column: {
    label: "Column",
    componentKey: "column",
    icon: <ColumnIcon boxSize="1rem" />,
  },
  container: {
    label: "Container",
    componentKey: "container",
    icon: <ContainerIcon boxSize="1rem" />,
  },
  heading: {
    label: "Heading",
    componentKey: "hreading",
    icon: <HeadingIcon boxSize="1rem" />,
  },
  hr: {
    label: "Hr",
    componentKey: "hr",
    icon: <HrIcon boxSize="1rem" />,
  },
  image: {
    label: "Image",
    componentKey: "image",
    icon: <ImageIcon boxSize="1rem" />,
  },
  link: {
    label: "Link",
    componentKey: "link",
    icon: <LinkIcon boxSize="1rem" />,
  },
  section: {
    label: "Section",
    componentKey: "section",
    icon: <SectionIcon boxSize="1rem" />,
  },
  text: {
    label: "Text",
    componentKey: "text",
    icon: <TextIcon boxSize="1rem" />,
  },
};
