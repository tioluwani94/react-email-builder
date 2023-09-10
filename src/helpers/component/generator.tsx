import { createElement } from "react";
import { Components } from "./register";

export const generateComponent = (block: {
  comp: any;
  props: any;
  _uid: string;
  children: any;
  component: string;
}) => {
  const { _uid, component, comp, props, children } = block;
  if (typeof Components[component] !== "undefined") {
    return createElement(
      comp,
      {
        _uid,
        key: _uid,
        type: component,
        ...props,
      },
      ...children
    );
  }
  return createElement(
    () => <div>The component {component} has not been created yet.</div>,
    { key: _uid }
  );
};
