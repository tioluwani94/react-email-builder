import { Button } from "@/components/ui";
import { CompType } from "@/types";
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

export const Components: CompType = {
  button: {
    comp: Button,
    props: {
      layoutProps: {
        textAlign: "center",
      },
      buttonProps: {
        href: "",
        target: "",
        pY: 10,
        pX: 20,
        style: {
          borderRadius: "4px",
          backgroundColor: "teal",
          color: "white",
        },
      },
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
