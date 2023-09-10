import { useEditorReducer } from "@/helpers/reducer";
import { ReducerKind } from "@/types";
import {
  Column,
  Button as REButton,
  Row,
  Section,
} from "@react-email/components";
import { useMemo, CSSProperties } from "react";

export const Button = (props: any) => {
  const { state, setComponentToEdit } = useEditorReducer();
  const { _uid, children, buttonProps, layoutProps, ...rest } = props;

  const rowStyle: CSSProperties = useMemo(() => {
    const isSelected = state.componentToEdit?._uid === _uid;
    if (isSelected) {
      return {
        borderWidth: "2px",
        borderColor: "teal",
      };
    }
    return {};
  }, [_uid, state.componentToEdit]);

  return (
    <Section {...rest}>
      <Row style={rowStyle} onClick={() => setComponentToEdit(_uid)}>
        <Column style={layoutProps}>
          <REButton {...buttonProps}>{children}</REButton>
        </Column>
      </Row>
    </Section>
  );
};
