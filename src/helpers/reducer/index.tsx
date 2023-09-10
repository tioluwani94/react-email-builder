import { ReducerAction, ReducerKind, ReducerState } from "@/types";
import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";

const EditorContext = createContext<any>(null);

const editorReducer = (state: ReducerState, action: ReducerAction) => {
  const { type, payload } = action;
  switch (type) {
    case ReducerKind.ADD_COMPONENT:
      return {
        ...state,
        tree: [...(state.tree ?? []), payload],
      };
    case ReducerKind.UPDATE_COMPONENT:
      const newTree = state.tree ?? [];
      const componentIndex = newTree?.findIndex(
        (t) => t._uid == payload.component._uid
      );
      newTree[componentIndex] = payload.component;
      return {
        ...state,
        tree: newTree,
      };
    case ReducerKind.REMOVE_COMPONENT:
      return {
        ...state,
        tree: state.tree?.filter((i) => i._uid !== payload._uid),
      };
    case ReducerKind.SET_COMPONENT_TO_EDIT:
      const { _uid } = payload;
      const component = state.tree?.find((i) => i._uid === _uid);
      return {
        ...state,
        componentToEdit: component,
      };
    case ReducerKind.UNSET_COMPONENT_TO_EDIT:
      return {
        ...state,
        componentToEdit: undefined,
      };
    default:
      return state;
  }
};

export const EditorProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [state, dispatch] = useReducer(editorReducer, {
    tree: undefined,
    componentToEdit: undefined,
  });
  const value = useMemo(() => [state, dispatch], [state]);

  return (
    <EditorContext.Provider value={value}>
      {props.children}
    </EditorContext.Provider>
  );
};

export const useEditorReducer = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error(`useEditorReducer must be used within a EditorProvider`);
  }
  const [state, dispatch] = context;

  const addComponentToTree = (payload: any) => {
    dispatch({
      payload,
      type: ReducerKind.ADD_COMPONENT,
    });
  };

  const updateComponent = (payload: any) => {
    dispatch({
      payload,
      type: ReducerKind.UPDATE_COMPONENT,
    });
  };

  const setComponentToEdit = (_uid: string) => {
    dispatch({
      payload: { _uid },
      type: ReducerKind.SET_COMPONENT_TO_EDIT,
    });
  };

  const closeEditor = () => {
    dispatch({ type: ReducerKind.UNSET_COMPONENT_TO_EDIT, payload: {} });
  };

  const removeComponentFromTree = (_uid: string) => {
    dispatch({
      type: ReducerKind.REMOVE_COMPONENT,
      payload: { _uid },
    });
  };

  return {
    state,
    dispatch,
    closeEditor,
    updateComponent,
    setComponentToEdit,
    addComponentToTree,
    removeComponentFromTree,
  };
};
