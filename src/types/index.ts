export interface CompType {
  [key: string]: { comp: any; props: any; children: any };
}

export enum ReducerKind {
  SET_COMPONENT_TO_EDIT = "SET_COMPONENT_TO_EDIT",
  UNSET_COMPONENT_TO_EDIT = "UNSET_COMPONENT_TO_EDIT",
  ADD_COMPONENT_TO_TREE = "ADD_COMPONENT_TO_TREE",
  REMOVE_COMPONENT_FROM_TREE = "REMOVE_COMPONENT_FROM_TREE",
}

export interface ReducerAction {
  type: ReducerKind;
  payload: any;
}

export interface ReducerState {
  tree?: any[];
  componentToEdit?: { type: string; component: CompType };
}
