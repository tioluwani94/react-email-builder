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
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
      },
      buttonProps: {
        href: "",
        target: "_blank",
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
