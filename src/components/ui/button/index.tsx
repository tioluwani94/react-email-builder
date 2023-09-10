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
  const { _uid, children, buttonProps, layoutProps, key } = props;

  const rowStyle: CSSProperties = useMemo(() => {
    const isSelected = state.componentToEdit?.component?._uid === _uid;
    if (isSelected) {
      return {
        borderWidth: "2px",
        borderColor: "teal",
      };
    }
    return {};
  }, [_uid, state.componentToEdit]);

  return (
    <Section>
      <Row key={key} style={rowStyle} onClick={() => setComponentToEdit(_uid)}>
        <Column style={{ padding: "10px", ...layoutProps }}>
          <REButton {...buttonProps}>{children}</REButton>
        </Column>
      </Row>
    </Section>
  );
};
