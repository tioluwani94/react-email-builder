import { ReducerAction, ReducerKind, ReducerState } from "@/types";
import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { v4 as uuidV4 } from "uuid";

const EditorContext = createContext<any>(null);

const editorReducer = (state: ReducerState, action: ReducerAction) => {
  const { type, payload } = action;
  switch (type) {
    case ReducerKind.ADD_COMPONENT_TO_TREE:
      return {
        ...state,
        tree: [...(state.tree ?? []), { ...payload, _uid: uuidV4() }],
      };
    case ReducerKind.REMOVE_COMPONENT_FROM_TREE:
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

  const addComponentToTree = (component: string) => {
    console.log(component);
    dispatch({
      payload: { component },
      type: ReducerKind.ADD_COMPONENT_TO_TREE,
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
      type: ReducerKind.REMOVE_COMPONENT_FROM_TREE,
      payload: { _uid },
    });
  };

  return {
    state,
    dispatch,
    closeEditor,
    setComponentToEdit,
    addComponentToTree,
    removeComponentFromTree,
  };
};
