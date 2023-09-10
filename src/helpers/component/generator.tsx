import { createElement } from "react";
import { Components } from "./register";

export const generateComponent = (block: {
  _uid: string;
  component: string;
}) => {
  const { _uid, component } = block;
  if (typeof Components[component] !== "undefined") {
    const { comp, props, children } = Components[component];
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
