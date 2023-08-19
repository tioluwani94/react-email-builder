import { Button } from "@/components/ui";
// import {
//   Column,
//   Heading,
//   Container,
//   Img,
//   Hr,
//   Link,
//   Section,
//   Text,
// } from "@react-email/components";

export const Components: {
  [key: string]: { comp: any; props: any; children: any };
} = {
  button: {
    comp: Button,
    props: {
      href: "",
      target: "",
    },
    children: ["Button"],
  },
  // column: Column,
  // container: Container,
  // heading: Heading,
  // hr: Hr,
  // image: Img,
  // link: Link,
  // section: Section,
  // text: Text,
};
