import React, { ReactNode } from "react";
import { FrameContextConsumer } from "react-frame-component";

export const FrameProvider = (props: { children: ReactNode }) => (
  <FrameContextConsumer>
    {({ document }) => {
      const aTags = document?.getElementsByTagName("a");

      for (let i = 0; i < (aTags?.length ?? 0); i++) {
        (aTags ?? [])[i].setAttribute("target", "_blank");
      }

      return props.children;
    }}
  </FrameContextConsumer>
);
